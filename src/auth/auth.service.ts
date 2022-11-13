import { HttpException, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AuthLoginDto } from './dto/auto.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private jwtService: JwtService,
  ) {}
  async login(authLoginDto: AuthLoginDto): Promise<any> {
    const { email, password } = authLoginDto;
    const user = await this.usersService.getUser({ email });
    if (!user) return new HttpException('USER_NOT_FOUND', 404);
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) new HttpException('PASSWORD_INVALID', 403);

    const payload = {
      name: user.name,
      email: user.email,
      password: user.password,
    };
    const token = this.jwtService.sign(payload);
    const data = {
      user,
      accessToken: token,
    };
    return data;
  }
}
