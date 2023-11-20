import { Controller, Get, Param } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/user/:id')
  findUser(@Param() params: UserDto) {
    return this.userService.getUser(params.id);
  }
}
