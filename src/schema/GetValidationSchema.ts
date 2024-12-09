import * as Yup from 'yup'
export const GetValidationSchema = (isNext: boolean) =>
  Yup.object().shape({
    title: Yup.string()
      .min(3, 'Minimo 3 caracteres')
      .required('O título é obrigatório'),
    name: Yup.string().when([], {
      is: () => isNext,
      // biome-ignore lint/suspicious/noThenProperty: <explanation>
      then: (schema) => schema.required('O nome é obrigatório'),
      otherwise: () =>
        Yup.string()
          .min(3, 'O nome tem conter no minimo 3 caracteres')
          .nullable(),
    }),
    email: Yup.string().when([], {
      is: () => isNext,
      // biome-ignore lint/suspicious/noThenProperty: <explanation>
      then: () =>
        Yup.string()
          .email('E-mail inválido')
          .required('O e-mail é obrigatório'),
      otherwise: () => Yup.string().email('E-mail inválido').nullable(),
    }),
  })
