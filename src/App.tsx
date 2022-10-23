import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/index.js";
import UpcomingPage from "./pages/UpcomingPage/index.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upcoming" element={<UpcomingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
