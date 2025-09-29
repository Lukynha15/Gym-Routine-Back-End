import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/utils/prisma';
import { CreateSetDto } from './dto/create-set.dto';
import { UpdateSetDto } from './dto/update-set.dto';

@Injectable()
export class SetService {
  constructor(private prisma: PrismaService) {}
  async create(createSetDto: CreateSetDto) {
    await this.prisma.set.create({
      data: {
        ...createSetDto,
      },
    });
    return 'Criado com sucesso';
  }

  async update(id: string, updateSetDto: UpdateSetDto) {
    await this.prisma.set.update({
      where: {
        id: id,
      },
      data: {
        ...updateSetDto,
      },
    });
    return `Atualizado com sucesso`;
  }

  async remove(id: string) {
    await this.prisma.set.delete({
      where: {
        id: id,
      },
    });
    return `Deletado com sucesso`;
  }
}
