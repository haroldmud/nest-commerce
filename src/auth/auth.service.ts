import { Injectable,UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt'; //Create protected API routes based on  a valid JWT as a token
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService  
  ){}

  async signIn(username: string, pass: string): Promise<any>{
    const user = await this.usersService.findOne(username);
    const encryptedPass = await bcrypt.compare(pass, user.password)
    if(!encryptedPass) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.userId, usename: user.userName }
  
    return {
      access_token: await this.jwtService.signAsync(payload)
    }
  }
}
