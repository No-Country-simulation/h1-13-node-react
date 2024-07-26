import { PrismaClient } from '@prisma/client';
import { CreateRoleDto, CustomError, PaginationDto, UserEntity } from '../../domain';

const prisma = new PrismaClient();

export class RoleService {

  // DI
  constructor() { }

  async createRole(createRoleDto: CreateRoleDto): Promise<string> {
    const { name } = createRoleDto;

    // Validación de datos
    if (!name) {
      throw new Error('El nombre del rol es obligatorio.');
    }

    // Crear el rol en la base de datos
    try {
      await prisma.role.create({
        data: {
          name,
        },
      });
      return 'Rol creado exitosamente.';
    } catch (error) {
      throw new Error('Error al crear el rol.');
    }
  }

  async getAllRoles() {
  try {
    const roles = await prisma.role.findMany();
    return roles;
  } catch (error) {
    console.error('Error al recuperar los roles:', error);
    throw new Error('No se pueden recuperar los roles');
  }
}

}

  

