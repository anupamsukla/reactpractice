import { useSelector } from 'react-redux'
import './App.css'
import Signin from './components/Signin'
import Signout from './components/Signout'

import { ThemeProvider, createTheme } from '@mui/material/styles'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  const authdata = useSelector((state) => state.logindata)

  return (
    <>
      {authdata?.username ? (
        <Signout />
      ) : authdata?.loading ? (
        <p>Loading</p>
      ) : (
        <Signin />
      )}
      <ThemeProvider theme={darkTheme}>
        <main>This app is using the dark mode</main>
      </ThemeProvider>
    </>
  )
}

export default App

// function App() {
//   return (
//     <ThemeProvider theme={darkTheme}>
//       <CssBaseline />
//       <main>This app is using the dark mode</main>
//     </ThemeProvider>
//   );
// }

// export default App;
