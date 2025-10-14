import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const { name, email, password } = createUserDto;
      const createUser = await this.prisma.user.create({
        data: {
          name,
          email,
          password
        }
      })
      return {
        success: true,
        message: "user create successfully",
        data: createUser
      }
    } catch (error) {
      return {
        success: false,
        message: `Something went wrong: ${error.message}`,
        data: null
      }
    }
  }

  async findAll() {
    try {
      const users = await this.prisma.user.findMany()
      return {
        success: true,
        message: "user data found successfully",
        data: users
      }
    } catch (error) {
      return {
        success: false,
        message: `error when get user: ${error.message}`,
        data: null
      }
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
