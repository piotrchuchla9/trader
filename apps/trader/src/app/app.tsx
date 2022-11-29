import MainPage from "./pages/main-page/main-page";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorPage from "./pages/error-page/error-page";

export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
