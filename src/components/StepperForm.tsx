import { Box, TextField } from "@mui/material";
import { FormikErrors, FormikTouched, useFormikContext } from "formik";
import { TStepperForms } from "../schema/StepperSchema";

interface StepperFormProps {
  activeStep: number;
  values: TStepperForms;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  touched: FormikTouched<TStepperForms>; // Use FormikTouched
  errors: FormikErrors<TStepperForms>; // Use FormikErrors
}

export const StepperForm = ({
  activeStep,
  values,
  handleChange,
  handleBlur,
  touched,
  errors,
}: StepperFormProps) => {
  const { setFieldValue } = useFormikContext<TStepperForms>();

  const currentStepData = values[activeStep] || {
    title: "",
    name: "",
    email: "",
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFieldValue(name, value); // Atualiza o Formik
    handleChange(event); // Mantém o comportamento do Formik
  };

  console.log(`:::::::errors`, errors);
  console.log(`:::::::touched`, touched);

  return (
    <div>
      <Box>
        {currentStepData && (
          <>
            <TextField
              name={`${activeStep}.title`}
              label="Título"
              variant="outlined"
              fullWidth
              margin="normal"
              value={currentStepData.title || ""}
              onChange={handleInputChange}
              onBlur={handleBlur}
              error={
                touched[activeStep]?.title && Boolean(errors[activeStep]?.title)
              }
              helperText={
                touched[activeStep]?.title && errors[activeStep]?.title
              }
            />

            <TextField
              name={`${activeStep}.name`}
              label="Nome"
              variant="outlined"
              fullWidth
              margin="normal"
              value={currentStepData.name || ""}
              onChange={handleInputChange}
              onBlur={handleBlur}
              error={
                touched[activeStep]?.title && Boolean(errors[activeStep]?.name)
              }
              helperText={
                touched[activeStep]?.title && errors[activeStep]?.name
              }
            />

            <TextField
              name={`${activeStep}.email`}
              label="Endereco de Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={currentStepData.email || ""}
              onChange={handleInputChange}
              onBlur={handleBlur}
              error={
                touched[activeStep]?.title && Boolean(errors[activeStep]?.email)
              }
              helperText={
                touched[activeStep]?.title && errors[activeStep]?.email
              }
            />
          </>
        )}
      </Box>
    </div>
  );
};
