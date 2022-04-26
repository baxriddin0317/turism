import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Detaly from './Components/Detaly/Detaly';
import Layaout from './Components/Layaout';
import Main from './Components/Main/Main';

function App() {
  let getLang = localStorage.getItem("Lang");
  
  const [ lang, setLang ] = useState(getLang == null ? "uz" : getLang);
  
  return (
    <div className='app'>
      
      {/* ==== routing ==== */}
      <Routes >
        <Route path='/' element={<Layaout lang={lang} setLang={setLang} />} >
          <Route index element={<Main lang={lang} />} />
          <Route path='detaly/:code' element={<Detaly lang={lang} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
