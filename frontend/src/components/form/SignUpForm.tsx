import { useSignUpForm } from "../../hooks/useSignUpForm";
import { ArrowIcon, NewUserIcon } from "../../svg";
import {
  signupInputFields,
  signupSelectFields,
} from "../../utils/formFieldsUtils";
import { ActionButton } from "./ActionButton";
import { Input } from "./Input";
import { Select } from "./Select";

export const SignUpForm = () => {
  const { formik } = useSignUpForm();

  return (
    <form className="mt-[27px] lg:mt-[38px]" onSubmit={formik.handleSubmit}>
      <div
        className={`grid grid-cols-2
                   gap-x-2 gap-y-3
                   ${
                     Object.keys(formik.errors).length
                       ? `lg:gap-y-5`
                       : `lg:gap-y-3`
                   }
                   lg:gap-x-4`}
      >
        {signupInputFields.slice(0, 4).map((field) => (
          <div key={field.name} className={field.colSpan}>
            <Input
              name={field.name}
              value={formik.values[field.name]}
              handleChange={formik.handleChange}
              label={field.label}
              type={field.type}
              placeholder={field.placeholder}
              errorMessage={
                formik.touched[field.name] && formik.errors[field.name]
                  ? formik.errors[field.name] ?? null
                  : null
              }
            />
          </div>
        ))}

        {signupSelectFields.map((field) => (
          <div key={field.name} className={field.colSpan}>
            <Select
              name={field.name}
              handleChange={formik.handleChange}
              value={formik.values[field.name]}
              label={field.label}
              options={field.options}
              errorMessage={
                formik.touched[field.name] && formik.errors[field.name]
                  ? formik.errors[field.name] ?? null
                  : null
              }
            />
          </div>
        ))}

        {signupInputFields.slice(4, 8).map((field) => (
          <div key={field.name} className={field.colSpan}>
            <Input
              name={field.name}
              value={formik.values[field.name]}
              handleChange={formik.handleChange}
              label={field.label}
              type={field.type}
              placeholder={field.placeholder}
              errorMessage={
                formik.touched[field.name] && formik.errors[field.name]
                  ? formik.errors[field.name] ?? null
                  : null
              }
            />
          </div>
        ))}

        <div
          className={`col-span-2 grid
                     grid-cols-2
                     gap-x-4
                     gap-y-4
                     mt-[23px]
                     lg:mt-[42px]
                     ${
                       Object.keys(formik.errors).length
                         ? `lg:mt-[24px]`
                         : `lg:mt-[42px]`
                     }`}
        >
          <div
            className="col-span-2
                       lg:col-span-1
                       lg:order-2
                       order-1"
          >
            <ActionButton
              type={"submit"}
              value={"Registrarse"}
              style={"pink"}
              icon={NewUserIcon}
            />
          </div>
          <div
            className="col-span-2
                       lg:col-span-1
                       lg:order-1
                       order-2
                       lg:flex"
          >
            <ActionButton
              href={"/login"}
              value={"Atrás"}
              style={"grey"}
              icon={ArrowIcon}
            />
          </div>
        </div>
      </div>
    </form>
  );
};
