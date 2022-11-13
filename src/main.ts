import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // swagger
  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('SOE Backend Services')
    .setDescription(
      `First version of an administrative api for enterprises, 
    open source by now.`,
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
  // end swagger docs //

  await app.listen(3000);
}
bootstrap();
