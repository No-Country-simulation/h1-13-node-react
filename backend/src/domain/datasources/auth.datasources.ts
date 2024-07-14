import { UserEntity } from '../entities/User.entity';
import { LoginUserDto, RegisterUserDto } from '..';





export abstract class AuthDatasource {

  // todo:
  abstract login( loginUserDto: LoginUserDto ):Promise<UserEntity>

  abstract register( registerUserDto: RegisterUserDto ):Promise<UserEntity>


}
