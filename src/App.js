import { Navbar } from './components';
import { Home, History, Projects, Achievements, ContactMe } from './sections'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <History />
      <Projects />
      <Achievements />
      <ContactMe />
    </>
  );  
}

export default App;
