import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordService {
  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
  }

  async comparePasswords(plainText: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(plainText, hashedPassword);
  }
} 