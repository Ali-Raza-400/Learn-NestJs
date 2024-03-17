import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasController } from './ninjas/ninjas.controller';
import { NinjasModule } from './ninjas/ninjas.module';
import { UserModule } from './user/user.module';
import { NinjasService } from './ninjas/ninjas.service';

@Module({
  imports: [NinjasModule, UserModule],
  controllers: [AppController, NinjasController],
  providers: [AppService,NinjasService],
})
export class AppModule {}
