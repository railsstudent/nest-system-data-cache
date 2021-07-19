import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

const DataMapFactory = {
  provide: 'DataMap',
  useFactory: (appService: AppService) => {
    return appService.getDataMap()
  },
  inject: [AppService],
}

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, DataMapFactory],
  exports: [DataMapFactory],
})
export class AppModule {}
