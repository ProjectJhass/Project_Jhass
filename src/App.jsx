import { Main } from "./Main/Main"
import { FuncionalityCreateRol } from "./components/FuncionalityCreateRol/FuncionalityCreateRol"
import { Functionalityform } from "./components/FuncionalityForm/FuncionalityForm"
import { FunctionalityRole } from "./components/FunctionalityRole/FunctionalityRole"
import { Footer } from "./components/Layouts/Footer/Footer"
import { Header } from "./components/Layouts/HeaderAdmin/HeaderAdmin"
import { Section } from "./components/Section/Section"







function App() {

  return (
    <>

<Header/>
<Main>
<Section/>
<FunctionalityRole/>
<FuncionalityCreateRol/>
<Functionalityform/>
</Main>
<Footer/>

    </>
  )
}

export default App
