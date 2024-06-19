import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './assets/pages/Login/Login.jsx'
import Register from './assets/pages/Register/Register.jsx'
import Manage from './assets/pages/Manage/Manage.jsx'
import Home from './assets/pages/Home/Home.jsx'
import NotFound from './assets/pages/NotFound/NotFound.jsx'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/manage' element={<Manage />} />
          <Route path='/*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
