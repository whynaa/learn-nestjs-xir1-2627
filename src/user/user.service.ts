import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    private readonly users = [];

    findAll(): string[] {
        return this.users;
    }
}
