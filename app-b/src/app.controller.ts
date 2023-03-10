import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { MessageDto } from './models/dto/message.dto';

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

  @Post()
  async create(@Body() messageDto: MessageDto) {
    return this.appService.publishMessage(messageDto);
  }
}
