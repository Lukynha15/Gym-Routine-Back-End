import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/utils/prisma';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';

@Injectable()
export class WorkoutService {
  constructor(private prisma: PrismaService) {}
  async create(createWorkoutDto: CreateWorkoutDto) {
    await this.prisma.workout.create({
      data: {
        name: createWorkoutDto.name,
        routine_id: createWorkoutDto.routine_id,
      },
    });
    return 'Criado com Sucesso';
  }

  async findAll() {
    const searchAll = await this.prisma.workout.findMany();
    return searchAll;
  }

  async findOne(id: string) {
    const searchById = await this.prisma.workout.findUnique({
      where: {
        id: id,
      },
    });
    return searchById;
  }

  async update(id: string, updateWorkoutDto: UpdateWorkoutDto) {
    await this.prisma.workout.update({
      where: {
        id: id,
      },
      data: {
        name: updateWorkoutDto.name,
        routine_id: updateWorkoutDto.routine_id,
      },
    });
    return `Atualizado com sucesso`;
  }

  async remove(id: string) {
    await this.prisma.workout.delete({
      where: {
        id: id,
      },
    });
    return `Deletado com sucesso`;
  }
}
