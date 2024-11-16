import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from 'src/user/dto/sign-in.dto';
import { User } from 'src/user/schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SignUpDto } from 'src/user/dto/sign-up.dto';
import { PasswordService } from './password.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
    private passwordService: PasswordService,
  ) {}

  async signIn(signInDto: SignInDto) {
        const { username, password } = signInDto;
        const user = await this.userModel.findOne({ username });
        if (!user) {
            throw new NotFoundException('User not found');
        }
        const isPasswordValid = await this.passwordService.comparePasswords(password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid password');
        }
        return this.login(user);
    }

    async signUp(signUpDto: SignUpDto) {
        const { username, password } = signUpDto;
        const user = await this.userModel.findOne({ username });
        if (user) {
            throw new ConflictException('User already exists');
        }
        const hashedPassword = await this.passwordService.hashPassword(password);
        const newUser = new this.userModel({ username, password: hashedPassword });
        const savedUser = await newUser.save();
        return this.login(savedUser);
    }

    private async login(user: User) {
    const payload = { username: user.username };
    return {
        access_token: await this.jwtService.signAsync(payload),
    };
    }
} 