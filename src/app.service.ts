import { DataMap, Salutation } from './app.interfaces'
import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!'
  }

  async getSalutations(): Promise<Salutation> {
    const salutations = ['Mr.', 'Mrs.', 'Miss']
    return new Promise((resolve) => setTimeout(resolve, 2000)).then(() => {
      console.log('Wait 2 seconds before returning salutations array')
      const now = Date.now()
      return {
        now,
        salutations,
      }
    })
  }

  async getDataMap(): Promise<DataMap> {
    return {
      salutations: await this.getSalutations(),
    }
  }
}
