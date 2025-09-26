import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/utils/prisma';
import { CreateRoutineDto } from './dto/create-routine.dto';
import { UpdateRoutineDto } from './dto/update-routine.dto';

@Injectable()
export class RoutineService {
  constructor(private prisma: PrismaService) {}

  async create(createRoutineDto: CreateRoutineDto) {
    if (createRoutineDto.user_id == null) {
      throw new Error('user_id is required');
    }

    const routine = await this.prisma.routine.create({
      data: {
        name: createRoutineDto.name,
        user_id: createRoutineDto.user_id,
        dayofweek: createRoutineDto.dayofweek,
      },
    });

    return routine;
  }

  findAll() {
    return this.prisma.routine.findMany();
  }

  findOne(id: string) {
    return this.prisma.routine.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: string, updateRoutineDto: UpdateRoutineDto) {
    return this.prisma.routine.update({
      where: {
        id: id,
      },
      data: {
        name: updateRoutineDto.name,
        dayofweek: updateRoutineDto.dayofweek,
      },
    });
  }

  remove(id: string) {
    return this.prisma.routine.delete({
      where: {
        id: id,
      },
    });
  }
}
