import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @RabbitSubscribe({
    exchange: 'amq.direct',
    routingKey: 'app_b',
    queue: 'app_b',
  })
  public async pubSubHandler(data: any) {
    this.appService.ConsumeMessage(data.message);
  }
}
