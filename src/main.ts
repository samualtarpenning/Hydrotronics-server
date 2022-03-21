import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Hydrotronics-Server')
    .setDescription('Api for Hydrotronics Server')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: "http", scheme: "bearer", bearerFormat: "Token"
      },
      "accessToken",
    )
    .addTag('Default')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(6000);
}
bootstrap();
