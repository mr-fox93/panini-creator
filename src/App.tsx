import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartAnimationScreen from "./pages/StartAnimationScreen";
import BaseForm from "./components/BaseForm/BaseForm";
import SuccesAnimationScreen from "./pages/SuccesAnimationScreen";
import GlobalStyle from "./GlobalStyle";
import FinishPage from "./components/FinalizeOrder/FinishPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartAnimationScreen />} />
        <Route path="/home" element={<BaseForm />} />
        <Route path="/success" element={<FinishPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
