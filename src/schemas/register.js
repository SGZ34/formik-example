import * as yup from "yup";
import es from "yup-es";

yup.setLocale(es);

export const signUpSchema = yup
  .object({
    name: yup.string().min(10).max(80).required().label("El nombre"),
    email: yup
      .string()
      .email()
      .min(10)
      .max(80)
      .required()
      .label("El correo electrónico"),
    password: yup
      .string()
      .min(10)
      .max(80)
      .required()
      .oneOf([yup.ref("confirmPassword")], "Las contraseñas deben ser iguales")
      .label("La contraseña"),
    confirmPassword: yup
      .string()
      .min(10)
      .max(80)
      .required()
      .oneOf([yup.ref("password")], "Las contraseñas deben ser iguales")
      .label("La confirmación de contraseña"),
  })
  .required();
