import { Injectable } from '@nestjs/common';
import { RabbitmqService } from './rabbitmq/rabbitmq.service';

@Injectable()
export class AppService {
  constructor(private readonly rabbitMq: RabbitmqService) {}

  /**
   * Objective: post message on exchange
   * @param {string} message - string
   * @author RDN
   */
  public publishMessage(message: string): void {
    this.rabbitMq.publish('app_b', {
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
