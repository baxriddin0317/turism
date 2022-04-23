import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Detaly from './Components/Detaly/Detaly';
import Layaout from './Components/Layaout';
import Main from './Components/Main/Main';

function App() {
  
  return (
    <div className='app'>
      
      {/* ==== routing ==== */}
      <Routes >
        <Route path='/' element={<Layaout />} >
          <Route index element={<Main />} />
          <Route path='detaly/:code' element={<Detaly />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
