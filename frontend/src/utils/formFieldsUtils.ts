interface SignUpFormValuesI {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    registrationNumber: string;
    specialty: string;
    maritalStatus: string;
    email: string;
    confirmEmail: string;
    password: string;
    confirmPassword: string;
}

interface SignupInputFieldI {
    name: keyof SignUpFormValuesI,
    label: string,
    type: "text" | "password",
    placeholder: string,
    colSpan: string,
}

interface SignupSelectFieldI {
    name: keyof SignUpFormValuesI,
    label: string,
    options:
    { value: string, label: string }[]
    ,
    colSpan: string,
}

export const signupInputFields: SignupInputFieldI[] = [
    {
        name: "firstName",
        label: "Nombre",
        type: "text",
        placeholder: "ej: John",
        colSpan: "col-span-2 lg:col-span-1",
    },
    {
        name: "lastName",
        label: "Apellido",
        type: "text",
        placeholder: "ej: Doe",
        colSpan: "col-span-2 lg:col-span-1",
    },
    {
        name: "phoneNumber",
        label: "Teléfono",
        type: "text",
        placeholder: "ej: 446789",
        colSpan: "col-span-1",
    },
    {
        name: "registrationNumber",
        label: "Nº Matrícula",
        type: "text",
        placeholder: "ej: 123456789",
        colSpan: "col-span-1",
    },
    {
        name: "email",
        label: "E-mail",
        type: "text",
        placeholder: "ej: johndoe@gmail.com",
        colSpan: "col-span-2 lg:col-span-1",
    },
    {
        name: "confirmEmail",
        label: "Confirmar E-mail",
        type: "text",
        placeholder: "ej: johndoe@gmail.com",
        colSpan: "col-span-2 lg:col-span-1",
    },
    {
        name: "password",
        label: "Contraseña",
        type: "password",
        placeholder: "",
        colSpan: "col-span-2 lg:col-span-1",
    },
    {
        name: "confirmPassword",
        label: "Confirmar contraseña",
        type: "password",
        placeholder: "",
        colSpan: "col-span-2 lg:col-span-1",
    },
]

export const signupSelectFields: SignupSelectFieldI[] = [
    {
        name: "specialty",
        label: "Especialidad",
        options: [
            { value: "", label: "Seleccione su especialidad" },
            { value: "Médico", label: "Médico" },
        ],
        colSpan: "col-span-2 lg:col-span-1",
    },
    {
        name: "maritalStatus",
        label: "Estado civil",
        options: [
            { value: "", label: "Seleccione su estado civil" },
            { value: "soltero", label: "Soltero/a" },
            { value: "casado", label: "Casado/a" },
        ],
        colSpan: "col-span-2 lg:col-span-1",
    },
];