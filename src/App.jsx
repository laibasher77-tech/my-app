
import NavbarComponent from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Textforms from './components/textform'
// import { useState } from 'react';
// import Alert from './components/alert';
// import About from './components/about';
// import { Routes, Route } from 'react-router';
// import Newthing from './components/newthing'
import Tailwind from './components/tailwindPrac';
import Breakprac from './components/breakprac';

 
function App() {
  // const [mode,setMode]= useState('light')
  // const [alert,setAlert]=useState(null)
  // const alerting=(message,type)=>{
  //     setAlert({
  //       msg:message,
  //       type:type
  //     })
  //    setTimeout(() => {
  //      setAlert(null)
  //    }, 2000);
  //      }
  // const toggleMode=()=>{
  //   if(mode==='light'){
  //     setMode('dark')
  //     document.body.style.backgroundColor="black"
  //     alerting("Dark Mode is enabled","success")
      
  //   }else{
  //     setMode('light')
  //      document.body.style.backgroundColor="white"
  //     alerting("light Mode is enabled","success")
     
  //   }
  //   }
  //   const greentoggleMode=()=>{
  //   if(mode==='light'){
  //     setMode('dark')
  //     document.body.style.backgroundColor="grey"
  //     alerting("Dark Mode is enabled","success")
      
  //   }else{
  //     setMode('light')
  //      document.body.style.backgroundColor="white"
  //     alerting("light Mode is enabled","success")
     
  //   }
  //   }
  //   const redtoggleMode=()=>{
  //   if(mode==='light'){
  //     setMode('dark')
  //     document.body.style.backgroundColor="#dc3545"
  //     alerting("Dark Mode is enabled","success")
      
  //   }else{
  //     setMode('light')
  //      document.body.style.backgroundColor="white"
  //     alerting("light Mode is enabled","success")
     
  //   }
  //   }
  //   const bluetoggleMode=()=>{
  //   if(mode==='light'){
  //     setMode('dark')
  //     document.body.style.backgroundColor="blue"
  //     alerting("Dark Mode is enabled","success")
      
  //   }else{
  //     setMode('light')
  //      document.body.style.backgroundColor="white"
  //     alerting("light Mode is enabled","success")
     
  //   }
  //   }
    
  return (
    <>
      {/* <NavbarComponent 
        title="Laiba" 
        mode={mode} 
        toggleMode={toggleMode} 
        greentoggleMode={greentoggleMode}
        redtoggleMode={redtoggleMode}
        bluetoggleMode={bluetoggleMode}
      />

      <Alert alert={alert} />
      <Textforms mode={mode} alerting={alerting} />

       {/* <Routes>
        <Route path="/" element={<Textforms mode={mode} alerting={alerting} />}  />
        <Route path="/about" element={<About />} />
        
      </Routes>  */} 
      <Tailwind/>
      <Breakprac/>
    </>
  );
}

export default App;

