import ProductList from "./Products/hooks/ProductList";
import Navbar from "./Navbar";
import LandingPage from "./landingpage";
const App=()=>{
  return(
    <div>
       <Navbar />
       <LandingPage/>
      <ProductList/>
     
    </div>
  )
}
export default App



