import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UserService {
    private readonly users:User[] = [];

    create(user: User){
        this.users.push(user)
        return "user berhasil ditambahkan"
    }
    
    findAll(): User[] {
        return this.users;
    }
}
