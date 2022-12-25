import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

type PasswordOmitUser = Omit<User, 'password'>;

export interface JwtPayload {
  userId: User['id'];
  username: User['name'];
}

/**
 * @description Passportでは出来ない認証処理をするクラス
 */
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  // ユーザーを認証する
  async validateUser(
    name: User['name'],
    pass: User['password'],
  ): Promise<PasswordOmitUser | null> {
    const user = await this.usersService.findOneByName(name); // DBからUserを取得

    // DBに保存されているpasswordはハッシュ化されている事を想定しているので、
    // bcryptなどを使ってパスワードを判定する
    if (user && bcrypt.compareSync(pass, user.password)) {
      const { password, ...result } = user; // パスワード情報を外部に出さないようにする

      return result;
    }

    return null;
  }

  // jwt tokenを返す
  async login(user: PasswordOmitUser) {
    // jwtにつけるPayload情報
    const payload: JwtPayload = { userId: user.id, username: user.name };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
