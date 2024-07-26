import { Router } from 'express';
import { AuthMiddleware } from '../middleware/auth.middleware';
import { AppointmentController } from './controller';
import { AppointmentService } from '../services/appointment.service';





export class ProductRoutes {


  static get routes(): Router {

    const router = Router();
    const appointmentService = new AppointmentService();
    const controller = new AppointmentController( appointmentService );

    // Definir las rutas
    router.get( '/', controller.getAppointment );
    router.post( '/',[ AuthMiddleware.validateJWT ], controller.createAppointment );
    router.delete('/:id',[ AuthMiddleware.validateJWT ], controller.getAppointment);
    //router.put('/:id',[ AuthMiddleware.validateJWT ], controller.updateProduct);




    return router;
  }


}

