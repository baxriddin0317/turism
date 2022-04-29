import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Detaly from './Components/Detaly/Detaly';
import Layaout from './Components/Layaout';
import Main from './Components/Main/Main';

function App() {
  const [ Data, setData ] = useState([]);
  useEffect(() => {
    axios.get("http://labbayk.uz/api/directions/?format=json")
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }, []);
  let getLang = localStorage.getItem("Lang");
  
  const [ lang, setLang ] = useState(getLang == null ? "uz" : getLang);
  
  return (
    <div className='app'>
      
      {/* ==== routing ==== */}
      <Routes >
        <Route path='/' element={<Layaout lang={lang} setLang={setLang} />} >
          <Route index element={<Main lang={lang} Data={Data} />} />
          <Route path='detaly/:code' element={<Detaly lang={lang} Data={Data} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
