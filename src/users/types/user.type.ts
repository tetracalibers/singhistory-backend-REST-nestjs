import { User } from '../entities/user.entity';

export type PasswordOmitUser = Omit<User, 'password'>;
