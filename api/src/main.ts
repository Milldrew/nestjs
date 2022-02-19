import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
const PORT = process.env.PORT || 3333;
async function bootstrap() {
  const config = new DocumentBuilder()
    .setTitle('Nest API')
    .setDescription('This API is an immature NestJS Rest API')
    .setVersion('1.0.0')
    .build();

  const app = await NestFactory.create(AppModule);
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/', app, document)
  app.enableCors();
  await app.listen(PORT);
  console.log(`Listening on port ${PORT}`);
}
bootstrap();
