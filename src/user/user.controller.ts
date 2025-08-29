import { Controller, Get, Req, Param, Post, Put, Delete, Query } from '@nestjs/common';
import type { Request } from 'express';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    @Get('all')
    findAll(@Req() request: Request): string {
        return 'This action returns all users';
    }

    @Get(':name')
    findOne(@Param('name') name: string): string {
        return `This action returns ${name} user`;
    }

    @Get()
    find(@Query('age') age: number, @Query('breed') breed: string) {
        return `This action returns all user filtered by age: ${age} and breed: ${breed}`;
    }

    @Post()
    create(): string {
        return 'This action adds a new user';
    }

    @Put(':id')
    update(@Param('id') id: string): string {
        return `This action update user id ${id}`;
    }

    @Delete(':id')
    delete(@Param('id') id: string): string {
        return `This action delete user id ${id}`;
    }
}
