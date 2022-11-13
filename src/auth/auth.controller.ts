import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from '../user/schema/user.schema';
import { UserCreationDto } from '../user/dto/user-creation.dto';
import { AuthService } from './auth.service';
import { AuthLoginDto } from './dto/auto.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('/register')
  async createUser(@Body() userCreationDto: UserCreationDto): Promise<User> {
    return this.userService.create(userCreationDto);
  }

  // @UseGuards(AuthGuard('local'))
  @Post('/login')
  login(@Body() userLoginDto: AuthLoginDto) {
    return this.authService.login(userLoginDto);
  }
}
