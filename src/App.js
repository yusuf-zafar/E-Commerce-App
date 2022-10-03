

import { Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import './App.css'
import PageNotFound from "./pages/PageNotFound";
import Orders from "./pages/Orders";
import OrderDetail from "./pages/OrderDetail";
import Navbar from "./components/Navbar";
import { useTheme } from "./hooks/useTheme";

function App() {
  const {theme} = useTheme();

  let style ={};
  if(theme === 'light'){
      style = {
          'background': 'white',
          'color': '#333'
      };
  } else if (theme === 'dark'){
      style = {
          'background': '#333',
          'color': 'white',
      };
  }

 return (
   <div style={style} className="App">
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="products" element={<Products/>}/>
      <Route path="contact" element={<Contact/>} />
      <Route path="products/:id" element={<ProductDetail/>}/>
      <Route path="*" element={<PageNotFound/>} />

      <Route path='orders' element={<Orders/>}>

      <Route index element={ 
         <main style={{ 'justifyContent': 'center', 'display': 'flex', 'height': '100%', 'alignItems': 'center' }}>
         <p>Select an order</p>
         </main>
        }/>
        
        <Route path=':id' element={<OrderDetail/>}/>
      </Route>

    </Routes>
   </div>
 );
}
 
export default App;






