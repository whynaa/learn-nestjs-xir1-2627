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

    update(id: number, user: User){
        const indexToUpdate = this.users.findIndex((users) => users.id === id);
        this.users.splice(indexToUpdate, 1, user)
        return `user berhasil diubah`
    }
    
    delete(id: number){
        const indexToDelete = this.users.findIndex(item => item.id === id);
        this.users.splice(indexToDelete,1);
        return `user berhasil dihapus`
    }
}
