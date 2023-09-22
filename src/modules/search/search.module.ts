import { DynamicModule, Module } from '@nestjs/common';
import { REQUEST, RouterModule } from "@nestjs/core";
import { CoreController } from '../../controllers/core.controller';
import { ExternalController } from '../../controllers/external.controller';
import { AppController } from "../../app.controller";
import { LeStoreService } from "../../services/store-service/le.store.service";
import { CevStoreService } from "../../services/store-service/cev.store.service";
import { StoreService } from "../../services/store-service/store.service";
import { Request, request } from "express";
import { SmarthintSearchService } from "../../services/search-service/smarthint.search.service";
import { VtexSearchService } from "../../services/search-service/vtex.search.service";
import { SearchService } from "../../services/search-service/search.service";

@Module({})
export class SearchModule {
  static register(): DynamicModule {
    return {
      module: SearchModule,
      controllers: [ExternalController, CoreController],
      providers: [
        LeStoreService,
        CevStoreService,
        SmarthintSearchService,
        VtexSearchService,
        {
          provide: StoreService,
          inject: [REQUEST],
          useFactory: (request: Request) => {
            const aServiceClass = ({
                le: LeStoreService,
                cev: CevStoreService,
              })[request.params.store] ?? LeStoreService;
            return new aServiceClass
          }
        },
        {
          provide: SearchService,
          inject: [REQUEST],
          useFactory: (request: Request) => {
            const aServiceClass = ({
              vtex: VtexSearchService,
              "smart-hint": SmarthintSearchService,
            })[request.params.engine] ?? VtexSearchService
            return new aServiceClass();
          }
        }
      ],
      imports: [
        RouterModule.register([
          {
            path: 'search/:store/:engine',
            module: SearchModule
          }
        ])
      ],
    };
  }
}
