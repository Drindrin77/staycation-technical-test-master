import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async getUser() {
    return this.userRepository.findUnique({
      where: {
        id: 1,
      },
    });
  }
}
