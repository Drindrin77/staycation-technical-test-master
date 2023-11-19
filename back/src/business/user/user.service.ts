import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async getUser(id: number) {
    return this.userRepository.findUnique({
      where: {
        id,
      },
    });
  }
}
