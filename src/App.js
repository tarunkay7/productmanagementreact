
import './App.css';
import ResponsiveAppBar from './components/AppBar'
import AddProduct from './components/AddProduct'
import LandingPage from './components/LandingPage'
import FindByName from './components/FindByName'
import { BrowserRouter as Router, Route, Link ,Routes} from 'react-router-dom';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route path="/add-product" element={<AddProduct />} />
                <Route path="/find-product-by-name" element={<FindByName />} />

            </Routes>
        </Router>
    );
}

export default App;
