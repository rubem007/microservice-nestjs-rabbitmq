import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyLogger } from './logger/logger.service';
import { BatchSpanProcessor } from '@opentelemetry/tracing';
import { ZipkinExporter } from '@opentelemetry/exporter-zipkin';
import { NodeTracerProvider } from '@opentelemetry/node';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new MyLogger(),
  });

  // Configurar o OpenTelemetry
  const tracer = new NodeTracerProvider();
  const zipkinExporter = new ZipkinExporter({
    serviceName: 'seu-servico',
    url: 'http://localhost:9411/api/v2/spans',
  });

  tracer.addSpanProcessor(new BatchSpanProcessor(zipkinExporter));
  tracer.register();

  await app.listen(3000);
}
bootstrap();
