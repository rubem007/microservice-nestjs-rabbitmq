import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @RabbitSubscribe({
    exchange: 'amq.direct',
    routingKey: 'app_a',
    queue: 'app_a',
  })
  public async pubSubHandler(data: any) {
    this.appService.ConsumeMessage(data.message);
  }
}
