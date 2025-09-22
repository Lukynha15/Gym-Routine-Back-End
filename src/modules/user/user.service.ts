import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/utils/prisma';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    const user = await this.prisma.user.create({
      data: {
        name: createUserDto.name,
        email: createUserDto.email,
        password: createUserDto.password,
        status: createUserDto.status,
      },
    });
    return user;
  }

  async findAll() {
    const searchAll = await this.prisma.user.findMany();
    return searchAll;
  }

  async findOne(id: string) {
    const searchById = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    return searchById;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name: updateUserDto.name,
        email: updateUserDto.email,
        password: updateUserDto.password,
        status: updateUserDto.status,
      },
    });
    return user;
  }

  async remove(id: string) {
    await this.prisma.user.delete({
      where: {
        id: id,
      },
    });
    return `O usuário ${id} foi deletado com sucesso`;
  }
}
