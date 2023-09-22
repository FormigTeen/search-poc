import { Injectable } from '@nestjs/common';
import { SearchService } from "./search.service";

@Injectable()
export class VtexSearchService extends SearchService {
  getSearch(): string {
    return 'Vtex Search Service';
  }
}
