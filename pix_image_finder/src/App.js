import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import NavBar from "./components/Navbar/NavBar";
import Search from "./components/Search/Search";

function App() {
  return (
    <MuiThemeProvider>
      <div className="App">
        <NavBar />
        <Search />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
