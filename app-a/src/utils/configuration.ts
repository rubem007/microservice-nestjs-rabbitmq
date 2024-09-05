import { ConfigService } from '@nestjs/config';

export function getRabbitMQConfig(enableControllerDiscovery: boolean) {
  console.log(process.env.URI_RABBITMQ_LOCAL);
  return {
    exchanges: [
      {
        name: 'amq.direct',
        type: 'direct',
      },
    ],
    uri: new ConfigService().get<string>('URI_RABBITMQ_LOCAL'),
    enableControllerDiscovery: enableControllerDiscovery,
  };
}
