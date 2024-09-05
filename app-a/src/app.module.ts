import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RabbitmqModule } from './rabbitmq/rabbitmq.module';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { getRabbitMQConfig } from 'src/utils/configuration';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [
    RabbitmqModule,
    RabbitMQModule.forRoot(RabbitMQModule, getRabbitMQConfig(true)),
    LoggerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
