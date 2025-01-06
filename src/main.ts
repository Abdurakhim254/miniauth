import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder,SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const config=new DocumentBuilder()
  .setTitle('Mini auth CRUD')
  .setDescription('The Auth Api description')
  .setVersion('1.0')
  .addTag('Auth')
  .build()

  const documentfactory=()=>SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api',app,documentfactory);
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
