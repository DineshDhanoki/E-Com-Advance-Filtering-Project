import Navigation from "./navigation/Navigation";
import Products from "./products/Products";
import Recommended from "./recommended/Recommended";
import Sidebar from "./sidebar/Sidebar";


function App() {
  return (
    <>
    <Sidebar/>
    <Navigation/>
    <Recommended/>
    <Products/>
    </>
  )
}

export default App;
