import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MobileStepper from "@mui/material/MobileStepper";
import { useTheme } from "@mui/material/styles";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { StepperSchema, TStepperForms } from "../schema/StepperSchema";
import { StepperForm } from "./StepperForm";

const stepsExample = [
  { title: "Titulo 1", name: "Nome 1", email: "email1@exemplo.com" }, // Título faltando
  { title: "Título 2", name: "", email: "email2@exemplo.com" }, // Nome faltando
  { title: "Título 3", name: "Nome 3", email: "email3" }, // Email inválido
];

export default function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  // const [steps, setSteps] = useState<TStepperForms>([]);

  const [initialValues, setInitialValues] = useState<TStepperForms | null>(
    null
  );

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    async function loadFormData() {
      try {
        await new Promise((res) => setTimeout(() => res("p1"), 1000)); // Busca os dados da API
        setInitialValues(stepsExample); // Define os valores iniciais
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    }

    loadFormData(); // Chama a função para carregar os dados
  }, []);

  if (initialValues === null) {
    return <div>Carregando...</div>; // Exibe uma mensagem de carregamento
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={StepperSchema}
      // validateOnBlur={true}
      // validateOnChange={true}
      // validateOnMount={true}
      onSubmit={(values) => {
        console.log(":::::::values", values);
      }}
    >
      {({
        values,
        handleSubmit,
        handleChange,
        handleBlur,
        touched,
        errors,
      }) => (
        <Box sx={{ flexGrow: 1 }}>
          <MobileStepper
            variant="text"
            steps={initialValues.length}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === initialValues.length - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
          {/* <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              pl: 2,
            }}
          >
            <Typography>{initialValues.length}</Typography>
          </Paper> */}
          <Box>
            {/* {steps[activeStep].description} */}
            <form onSubmit={handleSubmit}>
              <StepperForm
                activeStep={activeStep}
                values={values}
                handleChange={handleChange}
                handleBlur={handleBlur}
                touched={touched}
                errors={errors}
              />
            </form>
          </Box>
        </Box>
      )}
    </Formik>
  );
}
