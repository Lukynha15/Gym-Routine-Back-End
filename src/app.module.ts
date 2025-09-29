import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoutineModule } from './modules/routine/routine.module';
import { SetModule } from './modules/set/set.module';
import { UserModule } from './modules/user/user.module';
import { WorkoutModule } from './modules/workout/workout.module';

@Module({
  imports: [UserModule, RoutineModule, WorkoutModule, SetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
