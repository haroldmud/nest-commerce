import { Injectable } from '@nestjs/common';

export type UserType = {
  userId: number;
  userName: string,
  password: string,
} | undefined;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: + new Date().toString(),
      userName: 'john',
      password: 'guess',
    },
    {
      userId: + new Date().toString(),
      userName: 'maria',
      password: 'guess',
    }
  ];

  async findOne(username: string): Promise<UserType> {
    return this.users.find(user => user.userName === username);
  }
}
