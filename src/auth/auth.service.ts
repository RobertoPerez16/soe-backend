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
    if (!user)
      return new HttpException('Este usuario no se encuentra registrado.', 404);
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid)
      return new HttpException('La contraseña no coincide.', 403);

    if (!user.isActive)
      return new HttpException('Este usuario ya no está activo.', 403);

    if (user && password) {
      const payload = {
        name: user.name,
        email: user.email,
        password: user.password,
      };
      const token = this.jwtService.sign(payload);
      const data = {
        user,
        accessToken: token,
        success: true,
      };
      return data;
    }
  }
}
