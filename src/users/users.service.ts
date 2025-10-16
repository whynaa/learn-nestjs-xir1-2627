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

  async findOne(id: number) {
    try {
      const findUser = await this.prisma.user.findFirst({ where: { id: id } })
      if (!findUser) {
        return {
          success: false,
          message: `User does not exists`,
          data: null
        }
      }
      return {
        success: true,
        message: `User has retrieved`,
        data: findUser
      }
    } catch (error) {
      return {
        success: false,
        message: `error when get one user: ${error.message}`,
        data: null
      }
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const { name, email, password } = updateUserDto
      const findUser = await this.prisma.user.findFirst({ where: { id: id } })
      if (!findUser) {
        return {
          success: false,
          message: `User does not exists`,
          data: null
        }
      }

      const updateUser = await this.prisma.user.update({
        where: { id: id },
        data: {
          name: name ?? findUser.name,
          email: email ?? findUser.email,
          password: password ?? findUser.password,
          // password: password ? await this.bcrypt.hashPassword(password) : findUser.password
        }
      })

      return {
        success: true,
        message: `New User has updated`,
        data: updateUser
      }

    } catch (error) {
      return {
        success: false,
        message: `error when update user: ${error.message}`,
        data: null
      }
    }
  }

  async remove(id: number) {
    try {
      const findUser = await this.prisma.user.findFirst({
        where: {
          id: id
        }
      })
      if (!findUser) {
        return {
          success: false,
          message: `User does not exists`,
          data: null
        }
      }

      const deletedUser = await this.prisma.user.delete({
        where: {
          id: id
        }
      })
      return {
        success: true,
        message: `User has deleted`,
        data: deletedUser
      }
    } catch (error) {
      return {
        success: false,
        message: `error when delete user: ${error.message}`,
        data: null
      }
    }
  }
}
