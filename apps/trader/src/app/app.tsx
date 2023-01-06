import MainPage from "./pages/main-page/main-page";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
