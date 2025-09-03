import { Controller, Get, Req, Param, Post, Put, Delete, Query, Body } from '@nestjs/common';
import type { Request } from 'express';
import { UserService } from './user.service';
import * as userInterface from './user.interface';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Get()
    async findAll(): Promise<userInterface.User[]> {
        return this.userService.findAll();
    }

    @Get(':name')
    findOne(@Param('name') name: string): string {
        return `This action returns ${name} user`;
    }

    @Get('filter')
    find(@Query('age') age: number, @Query('breed') breed: string) {
        return `This action returns all user filtered by age: ${age} and breed: ${breed}`;
    }

    @Post()
    create(@Body() user: userInterface.User) {
        return this.userService.create(user);
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
