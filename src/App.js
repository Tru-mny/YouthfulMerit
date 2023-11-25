import './App.css';
import { motion } from "framer-motion"
import Landing from './homepage/landing/landing'
import Navbar from './homepage/navbar/navbar';
import Footer from './homepage/footer/footer';
import Middle from './homepage/middle/middle'



function App() {
  window.scrollTo(0, 0);
  return (
    <motion.div className="App"
    initial={{ opacity: 0 , x:20}}
    animate={{ opacity: 1 , x:0 }}
    transition={{ ease: "easeOut", duration: 0.5 }}
    >
      <Landing></Landing>
      <div className='div1'></div>
      <Middle></Middle>
      <Footer></Footer>
      <Navbar></Navbar>
    </motion.div>
  );
}

export default App;
