import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service';
import { StoreService } from "../services/store-service/store.service";
import { SearchService } from "../services/search-service/search.service";

@Controller('/external')
export class ExternalController {


  constructor(
    private readonly storeService: StoreService,
  ) {}
  @Get()
  getHello(): string {
    return this.storeService.getHello();
  }
}
