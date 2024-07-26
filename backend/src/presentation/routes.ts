import { Router } from "express";
import { AuthRoutes } from "./auth/routes";
import { RolesRoutes } from './roles/routes';
import { ProductRoutes } from './appointments/routes';

export class AppRoutes {
    static get routes(): Router {
        const router = Router()
        
        router.use('/api/auth', AuthRoutes.routes)
        router.use('/api/roles', RolesRoutes.routes );
        router.use('/api/appointments', ProductRoutes.routes );

        return router
    }
}