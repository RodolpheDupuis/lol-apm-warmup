import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { SignInDto } from '../user/dto/sign-in.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { SignUpDto } from '../user/dto/sign-up.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthenticationController {
    constructor(private readonly authService: AuthService) {}

    @Post('sign-in')
    signIn(@Body() signInDto: SignInDto) {
        return this.authService.signIn(signInDto);
    }

    @Post('sign-up')
    signUp(@Body() signUpDto: SignUpDto) {
        return this.authService.signUp(signUpDto);
    }
}