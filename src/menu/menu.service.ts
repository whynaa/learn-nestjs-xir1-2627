import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MenuService {
  constructor(
    private prisma: PrismaService
  ) { }
  async create(createMenuDto: CreateMenuDto) {
    try {
      const { name, price, category, description } = createMenuDto;
      const createMenu = await this.prisma.menu.create({
        data: {
          name,
          price: Number(price),
          category,
          description
        }
      })
      return {
        success: true,
        message: "menu created successfully",
        data: createMenu
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
      const menus = await this.prisma.menu.findMany()
      return {
        success: true,
        message: "menu data found successfully",
        data: menus
      }
    } catch (error) {
      return {
        success: false,
        message: `Something went wrong: ${error.message}`,
        data: null
      }
    }
  }

  async findOne(id: number) {
    try {
      const findMenu = await this.prisma.menu.findFirst({ where: { id: id } })
      if (!findMenu) {
        return {
          success: false,
          message: `User does not exists`,
          data: null
        }
      }
      return {
        success: true,
        message: `User has retrieved`,
        data: findMenu
      }
    } catch (error) {
      return {
        success: false,
        message: `Something went wrong: ${error.message}`,
        data: null
      }
    }
  }

  async update(id: number, updateMenuDto: UpdateMenuDto) {
    try {
      const { name, price, category, description } = updateMenuDto
      const findMenu = await this.prisma.menu.findFirst({ where: { id: id } })
      if (!findMenu) {
        return {
          success: false,
          message: `Menu does not exists`,
          data: null
        }
      }

      const updateMenu = await this.prisma.menu.update({
        where: { id: id },
        data: {
          name: name ?? findMenu.name,
          price: Number(price) ?? findMenu.price,
          category: category ?? findMenu.category,
          description: description ?? findMenu.description
        }
      })

      return {
        success: true,
        message: `Menu has updated`,
        data: updateMenu
      }

    } catch (error) {
      return {
        success: false,
        message: `Something went wrong: ${error.message}`,
        data: null
      }
    }
  }

  async remove(id: number) {
    try {
      const findMenu = await this.prisma.menu.findFirst({
        where: {
          id: id
        }
      })
      if (!findMenu) {
        return {
          success: false,
          message: `Menu does not exists`,
          data: null
        }
      }

      const deletedMenu = await this.prisma.menu.delete({
        where: {
          id: id
        }
      })
      return {
        success: true,
        message: `Menu has deleted`,
        data: deletedMenu
      }
    } catch (error) {
      return {
        success: false,
        message: `Something went wrong: ${error.message}`,
        data: null
      }
    }
  }
}
