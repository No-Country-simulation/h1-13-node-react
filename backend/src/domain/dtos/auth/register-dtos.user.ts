import { Validators } from '../../../config';



export class RegisterUserDto {
  constructor(
    public firstName: string,
    public lastName: string,
    public phoneNumber: string,
    public registrationNumber: string,
    public specialty: string,
    public maritalStatus: string,
    public email: string,
    public password: string,
    public roles: string
  ) {}

  static create(object: { [key: string]: any }): [string?, RegisterUserDto?] {
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
    } = object;

    if (!firstName) return ['Missing first name'];
    if (!lastName) return ['Missing last name'];
    if (!email) return ['Missing email'];
    if (!Validators.email.test(email)) return ['Invalid email format'];
    if (!password) return ['Missing password'];
    if (password.length < 6) return ['Password too short'];

    return [undefined, new RegisterUserDto(firstName, lastName, phoneNumber, registrationNumber, specialty, maritalStatus, email, password, roles)];
  }
}
