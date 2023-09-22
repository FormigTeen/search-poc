import { Injectable } from '@nestjs/common';
import { StoreService } from "./store.service";

@Injectable()
export class LeStoreService extends StoreService {
  getHello(): string {
    return 'Le Store';
  }
}
