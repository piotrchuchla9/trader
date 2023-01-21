import MainPage from "./pages/main-page/main-page";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WelcomePage from "./pages/welcome-page/welcome-page";

export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />}/>
        <Route path="/chart" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
