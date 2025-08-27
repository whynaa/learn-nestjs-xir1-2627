import { Controller, Get, Req, Param } from '@nestjs/common';
import type { Request } from 'express';

@Controller('user')
export class UserController {
    @Get()
    findAll(@Req() request: Request): string {
        return 'This action returns all users';
    }

    @Get(':name')
    findOne(@Param('name') name: string): string {
        return `This action returns ${name} user`;
    }
}
