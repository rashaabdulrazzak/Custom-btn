import Mbutton from "./Mbutton/newButton";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: "#f44336",
    },
    success: {
      main: "#4caf50",
    },
  },
});
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Mbutton text="play"></Mbutton>
      </ThemeProvider>
    </div>
  );
}

export default App;
