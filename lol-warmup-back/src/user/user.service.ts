import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema';
import { Model } from 'mongoose';
import { GetUserDto } from './dto/get-user.dto';
import { PasswordService } from '../auth/password.service';

@Injectable()
export class UserService {

  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private passwordService: PasswordService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await this.passwordService.hashPassword(createUserDto.password);
    
    const createdUser = new this.userModel({
      ...createUserDto,
      password: hashedPassword,
    });

    await createdUser.save();
    
    const { password, ...result } = createdUser.toObject();
    return result;
  }

  async findAll(): Promise<GetUserDto[]> {
    return await this.userModel.find();
  }

  async findOne(id: string): Promise<GetUserDto> {
    const user = await this.userModel.findById(id); 

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return {
      username: user.username,
      highestScore: user.highestScore
    };
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<GetUserDto> {
    return await this.userModel.findByIdAndUpdate(id, updateUserDto);
  }

  async remove(id: string): Promise<User> {
    return await this.userModel.findByIdAndDelete(id);
  }

  async validateUser(username: string, password: string): Promise<boolean> {
    const user = await this.userModel.findOne({ username });
    
    if (!user) {
      return false;
    }

    return this.passwordService.comparePasswords(password, user.password);
  }
}
