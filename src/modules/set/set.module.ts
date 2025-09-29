import { Module } from '@nestjs/common';
import { SetService } from './set.service';
import { SetController } from './set.controller';
import { PrismaService } from 'src/utils/prisma';

@Module({
  controllers: [SetController],
  providers: [SetService, PrismaService],
})
export class SetModule {}
