import { BrowserRouter } from "react-router-dom";

import { Contact, Home , Navbar ,  Resorts,  Villas ,About } from "./components";


const App = () => {
  return (
   <BrowserRouter>
   <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
   <Navbar/>
   <Home/>
   </div>
   <Villas/>
   <Resorts/>
   <About/>
   <Contact/>
   
   </BrowserRouter>
  );
}

export default App;