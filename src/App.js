import ProductList from "./Products/ProductList";
import Navbar from "./Navbar";
import LandingPage from "./landingpage";
import CategoryList from "./categories";
const App=()=>{
  return(
    <div>
       <Navbar />
       <LandingPage/>
       <CategoryList/>
      <ProductList/>
     
    </div>
  )
}
export default App



