import './App.css';

import { About, Footer, Header, Skills, Testimonial, Work } from "./containers"

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
