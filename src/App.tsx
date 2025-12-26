import {useState} from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Gifts from './components/gifts'
import Cta from './components/cta'
import Footer from './components/footer'
import Cart from './components/cart'
import { GiftProvider } from './context/CartProvider'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Navbar openCart={() => setIsCartOpen(!isCartOpen)} />
      <GiftProvider>
        <div className='app'>
          {isCartOpen && (
            <>
              <div className="cart-backdrop" onClick={() => setIsCartOpen(false)} />
              <aside className="cart-overlay">
                <Cart />
              </aside>
            </>
          )}
          <main className="main">
            <Hero />
            <About />
            <Gifts />
            <Cta />
            <Footer />
          </main>
        </div>
      </GiftProvider>
    </>
  )
}

export default App
