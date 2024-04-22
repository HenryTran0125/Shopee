/* eslint-disable no-unused-vars */
import HomeLayout from "./ui/HomeLayout";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
