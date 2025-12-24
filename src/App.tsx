
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import "./i18n";
import LiveChat from "./components/feature/LiveChat";

function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <AppRoutes />
      <LiveChat />
    </BrowserRouter>
  );
}

export default App;
