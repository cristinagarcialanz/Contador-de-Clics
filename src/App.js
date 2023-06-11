import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import Logo from './imagenes/clickcounter.jpgplus.webp';
import { useState } from 'react';

function App() {

  const [ numeroClics, setNumeroClics ] = useState(0);

  const manejarClic = () =>{
    setNumeroClics( numeroClics + 1 )
  };

  const reiniciarContador = () =>{
    setNumeroClics( 0 )
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img className='logo' src={Logo} alt='Logo' />
      </div>

      <div className='contenedor-principal'>

        <Contador numeroClics = {numeroClics} />

        <Boton 
          texto='click'
          esBotonDeClic= {true}
          manejarClic={manejarClic}
        />

        <Boton 
          texto='reiniciar'
          esBotonDeClic= {false}
          manejarClic={reiniciarContador}
        />

      </div>
      
    </div>
  );
}

export default App;
