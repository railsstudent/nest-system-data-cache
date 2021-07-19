import { DataMap, Salutation } from './app.interfaces'
import { Controller, Get, Inject } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, @Inject('DataMap') private dataMap: DataMap) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Get('salutations')
  async getSalutations(): Promise<Salutation> {
    // return this.appService.getSalutations()
    const { salutations } = this.dataMap
    return salutations
  }
}
