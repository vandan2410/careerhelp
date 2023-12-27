
import React from 'react';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
        <Route index element ={<Home/>} />
        <Route path='/home' element={<Home />}></Route>
        <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
