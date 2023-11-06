import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import StartAnimationScreen from "./pages/StartAnimationScreen";
import BaseForm from "./components/BaseForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartAnimationScreen />} />
        <Route path="/home" element={<BaseForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
