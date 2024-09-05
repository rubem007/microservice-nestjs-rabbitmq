// logger.service.ts
import { Injectable, LoggerService } from '@nestjs/common';
import { createLogger, transports, format, Logger } from 'winston';

@Injectable()
export class MyLogger implements LoggerService {
  private logger: Logger;

  constructor() {
    const { combine, timestamp, label, prettyPrint } = format;
    this.logger = createLogger({
      format: combine(
        //label({ label: 'right meow!' }),
        timestamp(),
        prettyPrint(),
      ),
      transports: [
        new transports.Console(),
        new transports.File({
          filename: 'logs/app.log', // Caminho para o arquivo de log
          handleExceptions: true,
          maxsize: 5242880, // 5MB
          maxFiles: 5,
        }),
      ],
    });
  }

  log(message: string) {
    this.logger.info(message);
  }

  error(message: string, trace: string) {
    this.logger.error(message, trace);
  }

  warn(message: string) {
    this.logger.warn(message);
  }

  debug(message: string) {
    this.logger.debug(message);
  }

  verbose(message: string) {
    this.logger.verbose(message);
  }
}
