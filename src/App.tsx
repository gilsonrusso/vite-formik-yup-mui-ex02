import { Box } from "@mui/material";
import "./App.css";
import TextMobileStepper from "./components/Stepper";
import { UsersProvider } from "./providers/UsersProvider";

function App() {
  return (
    <UsersProvider>
      <Box>
        {/* <FormikFormExample /> */}
        <TextMobileStepper />
      </Box>
    </UsersProvider>
  );
}

export default App;
