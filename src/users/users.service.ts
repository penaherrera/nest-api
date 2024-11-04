import { Injectable } from '@nestjs/common';

export type User = {
  userId: number;
  username: string;
  password: string;
};

//ToDo:This is a mockup, replace witha  real database impl

const users: User[] = [
  {
    userId: 1,
    username: 'Carlos',
    password: 'nest-is-awesome', //ToDo: should use a hash instead
  },
  {
    userId: 2,
    username: 'Francisco',
    password: 'generic-password', //ToDo: should use a hash instead
  },
];

@Injectable()
export class UsersService {
  async findUserByName(username: string): Promise<User | undefined> {
    return users.find((user) => user.username === username);
  }
}
