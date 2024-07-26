import { CustomError, UserEntity } from '../../domain';


export class UserMapper {
  static userEntityFromObject(object: { [key: string]: any }) {
    const { id, _id, firstName, lastName, phoneNumber, registrationNumber, specialty, maritalStatus, email, password, roles } = object;

    if (!firstName) throw CustomError.badRequest('Missing first name');
    if (!lastName) throw CustomError.badRequest('Missing last name');
    if (!email) throw CustomError.badRequest('Missing email');
    if (!password) throw CustomError.badRequest('Missing password');
    //if (!roles) throw CustomError.badRequest('Missing roles');

    const numericId = id && typeof id === 'string' ? Number(id) : id;

    return new UserEntity(
      _id || numericId,
      firstName,
      lastName,
      email,
      password,
      roles
    );
  }
}
