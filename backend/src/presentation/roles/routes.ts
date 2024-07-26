import { Router } from 'express';
import { RoleController} from './controller';
import { AuthMiddleware } from '../middleware/auth.middleware';
import { RoleService } from '../services/roles.service';





export class RolesRoutes {


  static get routes(): Router {

    const router = Router();
    const roleService = new RoleService();
    const controller = new RoleController(roleService);

    // Definir las rutas
    router.get( '/', controller.getCategories );
    router.post( '/',controller.createRole );




    return router;
  }


}

