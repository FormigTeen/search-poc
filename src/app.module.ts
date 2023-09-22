import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { SearchModule } from './modules/search/search.module';

@Module({
  imports: [
    SearchModule.register()
  ],
  providers: [AppService],
})
export class AppModule {}
