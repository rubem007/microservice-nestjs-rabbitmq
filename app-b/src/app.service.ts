import { Injectable } from '@nestjs/common';
import { RabbitmqService } from './rabbitmq/rabbitmq.service';
import { MessageDto } from './models/dto/message.dto';

@Injectable()
export class AppService {
  constructor(private readonly rabbitMq: RabbitmqService) {}

  /**
   * Objective: post message on exchange
   * @param {MessageDto} messageDto - MessageDto
   * @author RDN
   */
  public publishMessage(messageDto: MessageDto): void {
    const { message } = messageDto;
    this.rabbitMq.publish('app_a', {
      message,
    });
  }

  /**
   * Objective: Consume message from queue
   * @param {string} message - string
   * @author RDN
   */
  public ConsumeMessage(message: string): void {
    console.log(message);
  }
}
