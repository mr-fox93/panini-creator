import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartAnimationScreen from "./pages/StartAnimationScreen";
import BaseForm from "./components/BaseForm/BaseForm";
import SuccesAnimationScreen from "./pages/SuccesAnimationScreen";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartAnimationScreen />} />
        <Route path="/home" element={<BaseForm />} />
        <Route path="/success" element={<SuccesAnimationScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
