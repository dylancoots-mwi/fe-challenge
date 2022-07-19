import './App.css';
import {createTheme, CssBaseline, Grid, ThemeProvider} from '@mui/material'
import Search from './components/Search'
import UserTable from "./components/UserTable"

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <div className="App">
        <Grid container>
          <Grid item xs={12}>
            <Search/>
          </Grid>
          <Grid item xs={12}>
            <UserTable/>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App
