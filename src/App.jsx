import { BrowserRouter } from 'react-router-dom';
import { Hero, Navbar, About, Works, Experience, StarsCanvas } from './components';
import { CustomCursor } from './components/Cursor';
import { ReactLenis } from './components/LenisProvider';

const App = () => {
  return (
    <ReactLenis>
      <BrowserRouter>
        <CustomCursor />
        {/* Subtle noise overlay for deep texture */}
        <div className="noise-bg"></div>

        <div className='relative z-0 bg-primary min-h-screen selection:bg-accent/40 selection:text-white'>
          <Navbar />

          <main>
            <Hero />
            <About />
            <Works />
            <Experience />
          </main>

          <div className='relative z-0'>
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </ReactLenis>
  )
}

export default App
