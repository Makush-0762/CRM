import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Greeting from './pages/Greeting.js';
import Dashboard from './pages/Dashboard.js';
import Product from './pages/Product/Product.js';
import ProductItem1 from './pages/Product/ProductItem1.js';
import ProductItem2 from './pages/Product/ProductItem2.js';
import ProductItem3 from './pages/Product/ProductItem3.js';
import ProductItem4 from './pages/Product/ProductItem4.js';
import Customers from './pages/Customers/Customers';
import CustomersItem1 from './pages/Customers/CustomersItem1';
import CustomersItem2 from './pages/Customers/CustomersItem2';
import CustomersItem3 from './pages/Customers/CustomersItem3';
import CustomersItem4 from './pages/Customers/CustomersItem4';
import Income from './pages/Income/Income';
import IncomeItem1 from './pages/Income/IncomeItem1';
import IncomeItem2 from './pages/Income/IncomeItem2';
import IncomeItem3 from './pages/Income/IncomeItem3';
import IncomeItem4 from './pages/Income/IncomeItem4';
import Promote from './pages/Promote/Promote';
import PromoteItem1 from './pages/Promote/PromoteItem1';
import PromoteItem2 from './pages/Promote/PromoteItem2';
import PromoteItem3 from './pages/Promote/PromoteItem3';
import PromoteItem4 from './pages/Promote/PromoteItem4';
import Help from './pages/Help/Help';
import HelpItem1 from './pages/Help/HelpItem1';
import HelpItem2 from './pages/Help/HelpItem2';
import HelpItem3 from './pages/Help/HelpItem3';
import HelpItem4 from './pages/Help/HelpItem4';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Greeting />}
                />
                <Route
                    path="/Dashboard"
                    element={<Dashboard />}
                />
                <Route
                    path="/product"
                    element={<Product />}
                />
                <Route
                    path="/product/Product_item1"
                    element={<ProductItem1 />}
                />
                <Route
                    path="/product/Product_item2"
                    element={<ProductItem2 />}
                />
                <Route
                    path="/product/Product_item3"
                    element={<ProductItem3 />}
                />
                <Route
                    path="/product/Product_item4"
                    element={<ProductItem4 />}
                />
                <Route
                    path="/customers"
                    element={<Customers />}
                />
                <Route
                    path="/customers/Customers_item1"
                    element={<CustomersItem1 />}
                />
                <Route
                    path="/customers/Customers_item2"
                    element={<CustomersItem2 />}
                />
                <Route
                    path="/customers/Customers_item3"
                    element={<CustomersItem3 />}
                />
                <Route
                    path="/customers/Customers_item4"
                    element={<CustomersItem4 />}
                />
                <Route
                    path="/income"
                    element={<Income />}
                />
                <Route
                    path="/income/Income_item1"
                    element={<IncomeItem1 />}
                />
                <Route
                    path="/income/Income_item2"
                    element={<IncomeItem2 />}
                />
                <Route
                    path="/income/Income_item3"
                    element={<IncomeItem3 />}
                />
                <Route
                    path="/income/Income_item4"
                    element={<IncomeItem4 />}
                />
                <Route
                    path="/promote"
                    element={<Promote />}
                />
                <Route
                    path="/promote/Promote_item1"
                    element={<PromoteItem1 />}
                />
                <Route
                    path="/promote/Promote_item2"
                    element={<PromoteItem2 />}
                />
                <Route
                    path="/promote/Promote_item3"
                    element={<PromoteItem3 />}
                />
                <Route
                    path="/promote/Promote_item4"
                    element={<PromoteItem4 />}
                />
                <Route
                    path="/help"
                    element={<Help />}
                />
                <Route
                    path="/help/Help_item1"
                    element={<HelpItem1 />}
                />
                <Route
                    path="/help/Help_item2"
                    element={<HelpItem2 />}
                />
                <Route
                    path="/help/Help_item3"
                    element={<HelpItem3 />}
                />
                <Route
                    path="/help/Help_item4"
                    element={<HelpItem4 />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
