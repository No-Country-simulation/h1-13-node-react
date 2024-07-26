



export class CreateRoleDto {
  constructor(
    public readonly name: string,
  ) {}

  static create(object: { [key: string]: any }): [string?, CreateRoleDto?] {
    const { name = false } = object;

    if (!name) return ['Missing name'];

    return [undefined, new CreateRoleDto(name, )];
  }
}


