import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class RolesService {
  async findAll() {
    return await prisma.role.findMany();
  }
}
