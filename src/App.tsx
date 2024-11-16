import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MultiForm from "./pages/MultiForm";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MultiForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
