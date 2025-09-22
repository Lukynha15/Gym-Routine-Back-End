import { Status } from '@prisma/client';
import { IsEnum } from 'class-validator';

export class CreateUserDto {
  name: string;
  email: string;
  password: string;

  @IsEnum(Status)
  status: Status;
}
