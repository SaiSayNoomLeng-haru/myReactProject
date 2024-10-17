import Home from './pages/Home';
import Bedroom from './pages/Bedroom';
import Dining from './pages/Dining';
import LivingRoom from './pages/LivingRoom';
import Office from './pages/Office';
import ProductGallery from './pages/ProductGallery';
import Sofa from './pages/Sofa';
import Storage from './pages/Storage';
import Layout from './Components/Layout/Layout';

import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='sofa' element={<Sofa />} />
          <Route path='livingroom' element={<LivingRoom />} />
          <Route path='bedroom' element={<Bedroom />} />
          <Route path='dining&kitchen' element={<Dining />} />
          <Route path='study&office' element={<Office />} />
          <Route path='storage' element={<Storage />} />
          <Route path='productgallery' element={<ProductGallery />} />
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
