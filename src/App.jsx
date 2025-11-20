import { useState } from 'react'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import { ToastContainer } from 'react-toastify'
import MainLayout from './layout/MainLayout'

function App() {
  const [count, setCount] = useState(0)

  return (<>
    <ToastContainer
      position="bottom-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    
    <MainLayout>
      <AppRoutes />
    </MainLayout>
  </>)
}

export default App
