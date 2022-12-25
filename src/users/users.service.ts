import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { name } = createUserDto;
    const sameNameUsers = await this.userRepository.find({ where: { name } });
    if (sameNameUsers.length > 0) {
      return { statusCode: 409, message: `User ${name} already exists` };
    }
    const newUser = this.userRepository.create(createUserDto);
    await this.userRepository.insert(newUser);
    return {
      statusCode: 201,
      message: 'User created successfully',
      data: { name: newUser.name, id: newUser.id },
    };
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  findOneByName(name: string) {
    return this.userRepository.findOne({ where: { name } });
  }
  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
