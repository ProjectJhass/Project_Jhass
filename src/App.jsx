
import { Article } from "./components/Layouts/Article/Article"
import { Footer } from "./components/Layouts/Footer/Footer"
import { Header } from "./components/Layouts/Header/Header"
import { Main } from "./components/Layouts/Main/Main"
import { Section } from "./components/Layouts/Section/Section"
import { Home } from "./components/Pages/Home/Home"



function App() {
  return (
    <Home>
      <Main>
        <Header></Header>
        <Section>
          <Article>
          <h3 className="text-white text-xl font-normal ml-[-17.5%]">Nombre Completo</h3>
        <input type="text" placeholder=' E.j Angel hoyos Bolivar' className=' h-8 w-2/4 text-white rounded-md bg-[#0D1C49]'/>
        <h3 className="text-white text-xl font-normal ml-[-13.5%]">Fecha de Nacimiento</h3>
        <input type="date" id="fecha_nacimiento" name="fecha_nacimiento" placeholder=" Fecha de Nacimiento" className="h-8  w-2/4  rounded-md bg-[#0D1C49] text-white" required></input>
        <h3 className="text-white text-xl font-normal ml-[-24.5%]">Cual es su Rol</h3>
        <input list='rol' placeholder=" Rol" className="h-8 ml-[-39%] w-14 text-white rounded-md bg-[#0D1C49]"/>
        <datalist id='rol'>
            <option value="Empleado"></option>
            <option value="Supervisor"></option>
            <option value="Gerente"></option>
            <option value="Administrador"></option>
        </datalist>
          </Article>
          <Article>
          <h3 className="text-white text-xl font-normal ml-[-17.5%]">Correo Electronico</h3>
        <input type="email" placeholder='    angel@gmail.com' className='text-white w-3/6 h-8 rounded-md bg-[#0D1C49]'/>
        <h3 className="text-white text-xl font-normal ml-[-29%]">Contraseña</h3>
        <input type="password" placeholder="    ************" className="h-8 w-3/6 text-white rounded-md bg-[#0D1C49]"/>
        <h3 className="text-white text-xl font-normal ml-[-6.5%]">Confirme su Contraseña</h3>
        <input type="password" placeholder="    ************" className="h-8 text-white w-3/6 rounded-md bg-[#0D1C49]"/>
          </Article>
          </Section>
          <Footer>

          </Footer>
      </Main>
    </Home>
  )
}

export default App
