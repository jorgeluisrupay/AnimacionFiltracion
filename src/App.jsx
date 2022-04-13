import React from 'react'
import { ThemeProvider } from 'styled-components'
import Movies from './components/Movies/Movies'
import GlobalStyles from './Styles/GlobalStyles'
import { light } from './Styles/Themes'

const App = () => {
  return (
    <>
    <GlobalStyles />
    <ThemeProvider theme={light}>
      <Movies />
    </ThemeProvider>
    </>
  )
}

export default App