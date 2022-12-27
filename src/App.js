import DesktopOne from "./pages/Desktop1/DesktopOne/DesktopOne";
import DesktopTwo from "./pages/Desktop2/DesktopTwo/DesktopTwo";
import Cart from "./pages/Cart/Cart";
import Singup from "./pages/Signup/Singup";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="app-section">
      <DesktopOne />
      <DesktopTwo />
      <Cart/>
      <Singup />
      <Home/>
    </div>
  );
}

export default App;
