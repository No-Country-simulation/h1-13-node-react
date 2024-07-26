import { UserEntity } from '../entities/User.entity';
import { LoginUserDto, RegisterUserDto } from '..';




export abstract class AuthRepository {

  abstract login( loginUserDto: LoginUserDto ):Promise<UserEntity>;
  abstract register( registerUserDto: RegisterUserDto ):Promise<UserEntity>;


}
