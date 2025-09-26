import { DayOfWeek } from '@prisma/client';
import { IsEnum } from 'class-validator';

export class CreateRoutineDto {
  name: string;
  user_id: string;

  @IsEnum(DayOfWeek)
  dayofweek: DayOfWeek;
}
