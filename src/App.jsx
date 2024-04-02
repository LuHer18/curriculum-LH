import { AboutMe } from "./components/AboutMe"
import { Basic } from "./components/Basic"
import { Education } from "./components/Education"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import './App.css'



function App() {

  return (
    <>
      <main>
        <Basic/>
        <AboutMe/>
        <Education/>
        <Projects/>
        <Skills/>
      </main>
    </>
  )
}

export default App
