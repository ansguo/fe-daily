import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全局增加前缀的方式
  app.setGlobalPrefix('api')
  await app.listen(3000);
}
bootstrap();
