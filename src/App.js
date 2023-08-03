import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from 'reactstrap';

import { routes } from "./routes/routes"; 

import './App.css';

function App() {
  return (
    <Container>
       <BrowserRouter>
          <Routes>
            {
              routes && routes.map((item, index) => {
                return <Route key={index} path={item.path} element={<item.component />} />
              })
            }
          </Routes>
        </BrowserRouter>
    </Container>
  );
}

export default App;
