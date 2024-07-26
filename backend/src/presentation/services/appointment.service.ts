import { PrismaClient } from '@prisma/client';
import { CreateAppointmentDto, CustomError } from '../../domain';

const prisma = new PrismaClient();

export class AppointmentService {

  // DI
  constructor() { }

  async createAppointment(appointmentDto: CreateAppointmentDto) {
    try {
    const { date, doctorId, hospitalId, specialty } = appointmentDto;

    const appointment = await prisma.appointment.create({
      data: {
        date,
        doctorId,
        hospitalId,
        specialty,
      },
    });

    return appointment;
    } catch (error) {
      throw CustomError.InternalServerError(`${error}`);
    }
  }

  async getSpecificAppointment(appointmentId: number) {
  try {
    const specificAppointment = await prisma.appointment.findUnique({
      where: { id: appointmentId },
    });
    return specificAppointment;
  } catch (error) {
    console.error('Error retrieving specific appointment:', error);
    throw new Error('Unable to retrieve specific appointment');
  }
  }
  
  async getAllAppointments() {
  try {
    const allAppointments = await prisma.appointment.findMany();
    return allAppointments;
  } catch (error) {
    console.error('Error retrieving all appointments:', error);
    throw new Error('Unable to retrieve all appointments');
  }
}

  async deleteAppointment(appointmentId: number) {
  try {
    const deletedAppointment = await prisma.appointment.delete({
      where: { id: appointmentId },
    });
    return deletedAppointment;
  } catch (error) {
    console.error('Error deleting appointment:', error);
    throw new Error('Unable to delete appointment');
  }
}
}


//! couldn't do the update
/*
async updateProduct(productId: number, updateProductDto: UpdateProductDto) {
  const productExists = await prisma.product.findUnique({ where: { id: productId } });
  if (!productExists) throw CustomError.badRequest('Product does not exist');

  try {
    const data: any = { ...updateProductDto };

    if (updateProductDto.user !== undefined && updateProductDto.user !== null) {
      data.user = {
        connect: {
          id: Number(updateProductDto.user),
        },
      };
    }

    if (updateProductDto.category !== undefined && updateProductDto.category !== null) {
      data.category = {
        connect: {
          id: Number(updateProductDto.category),
        },
      };
    }

    const updatedProduct = await prisma.product.update({
      where: { id: productId },
      data,
    });

    return updatedProduct;
  } catch (error) {
    throw CustomError.InternalServerError(`${error}`);
  }
}

*/


