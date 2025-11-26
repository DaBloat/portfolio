import { Navbar } from './components';
import { Home, Projects, Achievements, ContactMe } from './sections'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <Achievements />
      <ContactMe />
    </>
  );  
}

export default App;
