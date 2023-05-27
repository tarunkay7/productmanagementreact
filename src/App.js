
import './App.css';
import AddProduct from './components/AddProduct'
import LandingPage from './components/LandingPage'
import GetAllProducts from "./components/GetAllProducts";
import FindByName from './components/FindByName'
import FindByPlace from './components/FindByPlace'
import FindByType from './components/FindByType'
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import './components/background.css';
import FindByWarranty from "./components/FindByWarranty";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route path="/get-all-products" element={<GetAllProducts/>} />
                <Route path="/add-product" element={<AddProduct />} />
                <Route path="/find-product-by-name" element={<FindByName />} />
                <Route path="/find-product-by-place" element={<FindByPlace />} />
                <Route path="/find-product-by-type" element={<FindByType />} />
                <Route path="/find-product-by-warranty" element={<FindByWarranty/>} />


            </Routes>
        </Router>
    );
}

export default App;
