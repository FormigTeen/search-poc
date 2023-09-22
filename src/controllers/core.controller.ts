import { Controller, Get } from '@nestjs/common';
import { StoreService } from '../services/store-service/store.service';
import { SearchService } from '../services/search-service/search.service';

@Controller('/core')
export class CoreController {
  constructor(
    private readonly storeService: StoreService,
    private readonly searchService: SearchService,
  ) {}

  @Get()
  getHello(): string {
    return this.storeService.getHello() + this.searchService.getSearch()
  }
}
