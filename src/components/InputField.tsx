import {
  TextField,
  type TextFieldProps,
  type TextFieldVariants,
} from '@mui/material'
import { type FieldHookConfig, useField } from 'formik'

type ExtendedFieldHook = FieldHookConfig<string> &
  TextFieldProps<TextFieldVariants> & { label: string }
export const InputField = ({ label, ...props }: ExtendedFieldHook) => {
  const [field, meta] = useField(props)
  return (
    <TextField
      fullWidth
      label={label}
      {...field}
      {...props}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    />
  )
}