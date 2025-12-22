import {useState} from 'react'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Gifts from './components/gifts'
import Cta from './components/cta'
import Footer from './components/footer'
import Cart from './components/cart'
import type { CartItem } from './components/cart';
import Products from './data/products.json'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [gifts, setGifts] = useState<CartItem[]>([])
  const [currentGifts, setCurrentGifts] = useState(
    Products.map(product => ({...product, quantity: 0}))
  );

  return (
    <>
      <Navbar openCart={() => setIsCartOpen(!isCartOpen)} />
      <div className='app'>
        {isCartOpen && (
          <>
            <div className="cart-backdrop" onClick={() => setIsCartOpen(false)} />
            <aside className="cart-overlay">
              <Cart items={gifts} setItems={setCurrentGifts} currentGifts={currentGifts}/>
            </aside>
          </>
        )}
        <main className="main">
          <Hero />
          <About />
          <Gifts setGifts={setGifts} currentGifts={currentGifts} />
          <Cta />
          <Footer />
        </main>
      </div>
    </>
  )
}

export default App
