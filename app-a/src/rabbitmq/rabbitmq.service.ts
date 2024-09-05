import { Injectable } from '@nestjs/common';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class RabbitmqService {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  async request(routingKey: string, data: any) {
    const response = await this.amqpConnection.request<any>({
      exchange: 'amq.direct',
      routingKey,
      payload: data,
    });

    return response;
  }

  publish(routingKey: string, data: any) {
    this.amqpConnection.publish<any>('amq.direct', routingKey, data);
  }
}
