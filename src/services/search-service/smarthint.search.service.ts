import { Injectable } from '@nestjs/common';
import { SearchService } from "./search.service";

@Injectable()
export class SmarthintSearchService extends SearchService {
  getSearch(): string {
    return 'Smarthint Search Service';
  }
}
