import { Injectable } from '@nestjs/common';
import { StoreService } from "./store.service";

@Injectable()
export class CevStoreService extends StoreService {
  getHello(): string {
    return 'CeV Store';
  }
}
