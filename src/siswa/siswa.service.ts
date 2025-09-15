import { Injectable } from '@nestjs/common';
import { CreateSiswaDto } from './dto/create-siswa.dto';
import { UpdateSiswaDto } from './dto/update-siswa.dto';

@Injectable()
export class SiswaService {
  private readonly siswa:CreateSiswaDto[] = [];
  create(createSiswaDto: CreateSiswaDto) {
    this.siswa.push(createSiswaDto)
    return 'Siswa berhasil ditambahkan';
  }

  findAll():CreateSiswaDto[] {
    return this.siswa
    // return `This action returns all siswa`;
  }

  findOne(nisn: string) {
    return this.siswa.find((siswa) => siswa.nisn === nisn);
    // return `This action returns a #${id} siswa`;
  }

  update(id: number, updateSiswaDto: UpdateSiswaDto) {
    return `This action updates a #${id} siswa`;
  }

  remove(id: number) {
    return `This action removes a #${id} siswa`;
  }
}
