import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { RoutineModule } from './modules/routine/routine.module';

@Module({
  imports: [UserModule, RoutineModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
