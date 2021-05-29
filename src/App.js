import {BrowserRouter} from "react-router-dom";
import Routes from "./config/Routes";
import {ThemeProvider} from "@material-ui/core/styles";
import {theme} from "./config/Theme";

function App() {
  return (
    <div>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </ThemeProvider>
    </div>
  );
}

export default App;
