import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MultiForm from "./pages/MultiForm";
import { Provider } from "react-redux";
import { store } from "./Store/store";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MultiForm />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
