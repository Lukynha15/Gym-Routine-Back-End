import { Module } from '@nestjs/common';
import { PrismaService } from 'src/utils/prisma';
import { WorkoutController } from './workout.controller';
import { WorkoutService } from './workout.service';

@Module({
  controllers: [WorkoutController],
  providers: [WorkoutService, PrismaService],
})
export class WorkoutModule {}
