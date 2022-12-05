import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

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

  // enable Cors //
  app.enableCors({
    origin: ['http://localhost:4200', 'https://soe-enterprise-1c7cd.web.app/'],
  });

  await app.listen(process.env.APP_PORT || 3000);
}
bootstrap();
