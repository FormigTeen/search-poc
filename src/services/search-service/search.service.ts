import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchService {
  getSearch(): string {
    return 'Search Service';
  }
}
