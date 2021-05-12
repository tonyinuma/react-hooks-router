import React from 'react';
import { Wrapper } from './components/Wrapper'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { NotFound } from './pages/NotFound'
import { useRoutes } from 'hookrouter'

const routes = {
  '/': () => <Home/>,
  '/about': () => <About/>,
  '/contact/:name': ({name}) => <Contact name={name}/>
}

function App() {
  const match = useRoutes(routes)
  return (
      <Wrapper>
        <Navbar/>
        {match || <NotFound/>}
      </Wrapper>
  );
}

export default App;
