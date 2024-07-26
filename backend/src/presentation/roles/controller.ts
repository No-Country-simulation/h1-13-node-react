import { Response, Request } from 'express';
import { RoleService } from '../services/roles.service';




export class RoleController {

  // DI
  constructor(
    private readonly roleService: RoleService,
  ) { }


  createRole = ( req: Request, res: Response ) => {

    try {
      const { name } = req.body; // Asegúrate de que tu solicitud incluya el campo 'name'

      const result = this.roleService.createRole({ name });

      res.status(201).json({ message: result });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el rol.' });
    }
  };

  getCategories = async ( req: Request, res: Response ) => {

   try {
      const roles = this.roleService.getAllRoles();

      res.status(200).json(roles);
    } catch (error) {
      res.status(500).json({ error: 'Error al recuperar los roles.' });
    }

  };

  

}