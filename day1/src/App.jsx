// import { useState } from 'react'
// import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
// import '/src/assets/css/App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import {lazy} from 'react';
import LazyLayout from "./Components/Lazylayout";
const Lazylog=lazy(()=>import('/src/pages/user/login.jsx'));
const LazyProfile=lazy(()=>import('./pages/user/Profile'));
const Lazysign=lazy(()=>import('/src/pages/user/Signup.jsx'));
const LazyHome=lazy(()=>import('/src/pages/user/Home.jsx'));
const LazyBox=lazy(()=>import('/src/pages/user/Box.jsx'));

const LazyJobdetails=lazy(()=>import('./pages/user/javafullstack'))
function App() {

  return (
    <BrowserRouter>
      <Routes>
         
        <Route exact path="/" element={<LazyLayout component={LazyHome}/>}/>
        <Route path="/login" element={<LazyLayout component={Lazylog}/>}/>
        <Route path="/sign" element={<LazyLayout component={Lazysign}/>}/>
        <Route path="/home" element={<LazyLayout component={LazyHome}/>}/>
        <Route path="/jobs" element={<LazyLayout component={LazyBox}/>}/>
        <Route path="/profile" element={<LazyLayout component={LazyProfile}/>}/>
        <Route path="/job/1" element={<LazyLayout component={LazyJobdetails}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
