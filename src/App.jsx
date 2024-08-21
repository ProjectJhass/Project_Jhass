import { Header } from "./components/Header/Header";

// import { FuncionalityCreateRol } from "./components/FuncionalityCreateRol/FuncionalityCreateRol";
// import { ModalViewRole } from "./components/ModalViewRole/ModalViewRole";
import { Functionalityform } from "./components/FuncionalityForm/FuncionalityForm";
import { HeaderAdmin } from "../src/components/Layouts/HeaderAdmin/HeaderAdmin";
import { PopupWindow } from "../src/components/Pop-upWindow/Pop-upWindow";
import { Profile } from "./components/pages/Profile/Profile";
import { Footer } from "./components/Layouts/Footer/Footer";
import Card from "./components/Card/Card.jsx";
import { useContext,} from "react";
import { AppContext } from '../src/components/Context/Context.jsx';
import { Section } from '../src/components/SectionEmployees/Section.jsx';
// import { SectionViewRole } from "./components/ModalViewRole/SectionViewRole/SectionViewRole.jsx";
import Modal from "./components/SectionProfile/Modal/Modal.jsx";
import { SectionRegister } from "./components/RegisterEm/ResgisterEm.jsx";
import { Cale } from "./components/Calendar/Calendar.jsx";
import { Stock } from "./components/pages/Stock/Stock.jsx";
import { Rol } from "./components/pages/Rol/Rol.jsx";
import { CardsTracking } from "./components/employeeTracking/CardsTracking/CardsTracking.jsx";
import ModalCreatetask from "./components/Calendar/ModalCreateTask/ModalCreateTask.jsx";
import { CardNew } from "./components/SectionNews/CardNew/CardNew.jsx";


function App() {
  const NewContext = useContext(AppContext);

  return (
    <>
   {/* <Header/> */}
   {/* <PopupWindow/> */}
{/* <FuncionalityCreateRol/> */}
{/* <Functionalityform/> */}

{/* <HeaderAdmin/> */}
{/* <ModalCreatetask/> */}
{/* <CardsTracking/> */}
<CardNew/>

{/* Vista editar cards con funcionalidad y ventanas modales */}
{/* <Orders/> */}
{/* <Rol/> */}
{/* <Section/>
// <SectionViewRole/> */}
{/* <SectionRegister/> */}
{/* <Stock/> */}
{/* <Cale/> */}
{/* <Profile/> */}
{/* <Card/> */}
<Footer/>

{/* 
<Modal/> */}
    </>
  )
}

export default App