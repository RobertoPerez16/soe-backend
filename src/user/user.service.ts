import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';
import { UserCreationDto } from './dto/user-creation.dto';
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async create(userCreationDto: UserCreationDto): Promise<User> {
    const { password } = userCreationDto;
    const saltOrRounds = 10;
    const plainToHash = await bcrypt.hash(password, saltOrRounds);
    userCreationDto = { ...userCreationDto, password: plainToHash };
    return this.userModel.create(userCreationDto);
  }

  async getUser(query: object): Promise<User> {
    return this.userModel.findOne(query);
  }
}
