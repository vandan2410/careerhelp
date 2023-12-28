
import React from 'react';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import NotFound from './pages/NotFound';
import Landing from './pages/Landing';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
        <Route index element ={<Landing/>} />
        <Route path='/home' element={<Landing />}></Route>
        <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
