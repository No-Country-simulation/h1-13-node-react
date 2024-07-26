
export class CreateAppointmentDto {
  constructor(
    public readonly date: Date,
    public readonly doctorId: number,
    public readonly hospitalId: number,
    public readonly specialty: string,
    // Otros campos relevantes para tu aplicación
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateAppointmentDto?] {
    const { date, doctorId, hospitalId, specialty } = props;

    if (!date) return ['Falta la fecha de la cita'];
    //if (!(date instanceof Date)) return ['La fecha debe ser un objeto Date'];

    if (!doctorId) return ['Falta el ID del médico'];
    if (typeof doctorId !== 'number') return ['El ID del médico debe ser un número'];

    if (!hospitalId) return ['Falta el ID del hospital'];
    if (typeof hospitalId !== 'number') return ['El ID del hospital debe ser un número'];

    if (!specialty) return ['Falta la especialidad'];
    if (typeof specialty !== 'string') return ['La especialidad debe ser un texto'];

    // Otras validaciones según tus necesidades

    return [undefined, new CreateAppointmentDto(date, doctorId, hospitalId, specialty)];
  }
}

