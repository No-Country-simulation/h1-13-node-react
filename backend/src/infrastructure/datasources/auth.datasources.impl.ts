import { bcryptAdapter } from '../../config';
import { PrismaClient} from '@prisma/client';
import { AuthDatasource, CustomError, LoginUserDto, RegisterUserDto, UserEntity } from '../../domain';
import { UserMapper } from '../mappers/user.mapper';

type HashFunction = (password: string) => string;
type CompareFunction = (password: string, hashed: string) => boolean;

const prisma = new PrismaClient();

export class AuthDatasourceImpl implements AuthDatasource {

  constructor(
    private readonly hashPassword: HashFunction = bcryptAdapter.hash,
    private readonly comparePassword: CompareFunction = bcryptAdapter.compare,
  ) {}

  async login( loginUserDto: LoginUserDto ): Promise<UserEntity> {
    const { email, password } = loginUserDto;

    try {
      const user = await prisma.user.findUnique({ where: { email } });

      if (!user) throw CustomError.badRequest('User does not exists - email');

      const isMatching = this.comparePassword(password, user.password);
      if (!isMatching) throw CustomError.badRequest('Password is not valid');

      return UserMapper.userEntityFromObject(user);

    } catch (error) {
      console.log(error);
      throw CustomError.InternalServerError();
    }
  }

 async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
  const {
    firstName,
    lastName, 
    phoneNumber, 
    registrationNumber, 
    specialty, 
    maritalStatus, 
    email,
    password,
    roles
  } = registerUserDto;

  try {
    const exists = await prisma.user.findUnique({ where: { email } });

    if (exists) throw CustomError.badRequest('El usuario ya existe');

    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        phoneNumber,
        registrationNumber,
        specialty,
        maritalStatus,
        email,
        password: this.hashPassword(password),
        roles
      },
    });

    return UserMapper.userEntityFromObject(user);
  } catch (error) {
    if (error instanceof CustomError) {
      throw error;
    }
    throw CustomError.InternalServerError();
  }
}


}
