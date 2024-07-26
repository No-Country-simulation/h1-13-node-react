import { Response, Request } from 'express';
import { CreateAppointmentDto, CustomError, PaginationDto } from '../../domain';
import { AppointmentService } from '../services/appointment.service';




export class AppointmentController {

  // DI
  constructor(
    private readonly AppointmentService: AppointmentService,
  ) { }


  private handleError = ( error: unknown, res: Response ) => {
    if ( error instanceof CustomError ) {
      return res.status( error.statusCode ).json( { error: error.message } );
    }

    console.log( `${ error }` );
    return res.status( 500 ).json( { error: 'Internal server error' } );
  };


  createAppointment = ( req: Request, res: Response ) => {

    const [ error, createProductDto ] = CreateAppointmentDto.create({ 
      ...req.body,
      user: req.body.user.id,
    });
    if ( error ) return res.status( 400 ).json( { error } );


    this.AppointmentService.createAppointment( createProductDto! )
      .then( category => res.status( 201 ).json( category ) )
      .catch( error => this.handleError( error, res ) );

  };

  getAppointment = async ( req: Request, res: Response ) => {

    const { page = 1, limit = 10 } = req.query;
    const [ error, paginationDto ] = PaginationDto.create( +page, +limit );
    if ( error ) return res.status(400).json({ error });

    
    this.AppointmentService.getAllAppointments()
      .then( products => res.json( products ))
      .catch( error => this.handleError( error, res ) );

  };

  deleteAppointment = (req: Request, res: Response) => {
  const appointmentId = Number(req.params.id);
  if (!appointmentId) return res.status(400).json({ error: 'Invalid product id' });

  this.AppointmentService.deleteAppointment(appointmentId)
    .then(response => res.json(response))
    .catch(error => this.handleError(error, res));
};
/*
  updateProduct = (req: Request, res: Response) => {
  const productId = Number(req.params.id);
  const updateProductDto = req.body;
  if (!productId) return res.status(400).json({ error: 'Invalid product id' });

  this.productService.updateProduct(productId, updateProductDto)
    .then(updatedProduct => res.json(updatedProduct))
    .catch(error => this.handleError(error, res));
};
*/

}