import { AboutMe } from "./components/AboutMe"
import { Basic } from "./components/Basic"
import { Education } from "./components/Education"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import './App.css'
import { Language } from "./components/Language"
import { CommandK } from "./components/CommandK"
function App() {

    /* ninja.data = [
      {
        id: 'print',
        title: '🖨 Imprimir',
        hotkey: 'ctrl+p',
        section: 'Acción',
        handler: () => {
          window.print()
        },
      },
    ] */


  return (
    <>
      <main>
        <Basic />
        <AboutMe />
        <Projects />
        <Education />
        <Skills />
        <Language />
      </main>
      <CommandK/>
    </>
  )
}

export default App
