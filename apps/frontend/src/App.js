import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouter from "./routes/AppRouter";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
