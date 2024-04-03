import { ContextProvider } from './context'
import { FirstPage } from './components/FirstPage'
import { Beginning } from './components/Beginning'
import { Decision } from './components/Decision'
import { Education } from './components/Education'

export function App() {

  return (
    <ContextProvider>
      <FirstPage />
      <Beginning />
      <Decision />
      <Education />
    </ContextProvider>
  )
}


