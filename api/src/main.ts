import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

const { PORT = 3000 } = process.env;

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));

  const config = new DocumentBuilder()
    .setTitle('API REST de Login')
    .setDescription(
      'API REST com NESTJS do ZERO a AWS com TERRAFORM e Github Actions',
    )
    .setVersion('1.0')
    .addTag('cats')
    .build();

  const swaggerCDN = 'https://cdn.jsdelivr.net/npm/swagger-dist@5.7.2';
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document, {
    customCssUrl: `${swaggerCDN}/swagger-ui.css`,
    customJs: [
      `${swaggerCDN}/swagger-ui-bundle.js`,
      `${swaggerCDN}/swagger-ui-standalone-preset.js`,
    ],
  });
  await app.listen(PORT);
  console.log(`Servidor rodando https://localhost:${PORT}`);
  console.log(`Swagger rodando no: https://localhost:${PORT}/api`);
}
bootstrap();
