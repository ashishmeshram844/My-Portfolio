import React from "react";
import { Main } from "./Components/Main";
import { BrowserRouter } from "react-router-dom";
import { Route,Routes } from "react-router-dom";


function App() {
 return(
  <>
  <BrowserRouter>
    <Routes>
        <Route path="/My-Portfolio" element= {<Main/>}>

        </Route>
    </Routes>
    {/* <Main/> */}
  </BrowserRouter>
  </>
 )
}

export default App;
