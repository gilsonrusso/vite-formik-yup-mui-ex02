import { Box, Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import { useState } from 'react'
import { GetValidationSchema } from '../schema/GetValidationSchema'

const markAllFieldsAsTouched = (
  values: Record<string, unknown>,
  setTouched: (fields: Record<string, boolean>) => void,
) => {
  const touchedFields = Object.keys(values).reduce(
    // biome-ignore lint/performance/noAccumulatingSpread: <explanation>
    (acc, field) => ({ ...acc, [field]: true }),
    {},
  )
  setTouched(touchedFields)
}

export const FormikFormExample = () => {
  const [isNext, setIsNext] = useState<boolean>(false)

  const handleClicSaveForm = async () => {
    setIsNext(false)

    const errors = await formik.validateForm()
    markAllFieldsAsTouched(formik.values, formik.setTouched)

    if (Object.keys(errors).length === 0) {
      console.log('Salvo com sucesso!')
    } else {
      console.log('Erros de validação:', errors)
    }
  }
  const handleClicNextForm = async () => {
    setIsNext(true)

    const errors = await formik.validateForm()
    markAllFieldsAsTouched(formik.values, formik.setTouched)
    if (Object.keys(errors).length === 0) {
      console.log('Próximo passo!')
    } else {
      console.log('Erros de validação:', errors)
    }
  }

  const formik = useFormik({
    initialValues: {
      title: '',
      name: '',
      email: '',
    },
    validationSchema: GetValidationSchema(isNext),
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => {
      console.log('Valores enviados:', values)
    },
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box>
        <TextField
          name="title"
          label="Título"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />

        <TextField
          name="name"
          label="Nome"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />

        <TextField
          name="email"
          label="Endereco de Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      </Box>

      <Button
        variant="contained"
        color="primary"
        style={{ marginRight: 8 }}
        onClick={handleClicSaveForm}
      >
        Save
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleClicNextForm}
      >
        Next
      </Button>
    </form>
  )
}
