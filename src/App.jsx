import { ToastContainer } from 'react-toastify'
import './App.css'
import About from './components/about/About'
import Featured from './components/featured/Featured'
import Footer from './components/footer/Footer'
import Hero from './components/herosection/Hero'
import Navbar from './components/navbar/Navbar'
import Products from './components/products/Products'
import Sidebar from './components/sidebar/Sidebar'
import Steps from './components/steps/Steps'
import { ProductCartProvider } from './context/ProductContext'
import { SidebarProvider } from './context/SidebarContext'

function App() {

  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        theme="light"
      />
      <ProductCartProvider>
        <SidebarProvider>
          <Navbar />
          <Sidebar />
          <Hero />
          <Steps />
          <Featured />
          <About />
          <Products />
          <Footer />
        </SidebarProvider>
      </ProductCartProvider>
    </>
  )
}

export default App
