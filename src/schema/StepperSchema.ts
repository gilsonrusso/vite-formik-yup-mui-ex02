import * as yup from "yup";
import { InferType } from "yup";

export const StepperSchema = yup
  .array()
  .of(
    yup.object().shape({
      title: yup.string().required("Título é obrigatório"),
      name: yup.string().required("Nome é obrigatório"),
      email: yup
        .string()
        .email("Email inválido")
        .required("Email é obrigatório"),
    })
  )
  .required();

export type TStepperForms = InferType<typeof StepperSchema>;
