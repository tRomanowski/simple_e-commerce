import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import {
	Home,
	Products,
	SingleProduct,
	About,
	Cart,
	Error,
	Checkout,
	Private,
} from './pages';

function App() {
	return (
		<>
			<Navbar />
			<Sidebar />
			<Routes>
				<Route path='/' exact element={<Home />} />
				<Route path='/about' exact element={<About />} />
				<Route path='/cart' exact element={<Cart />} />
				<Route path='/products' exact element={<Products />} />
				<Route path='/products/:id' exact element={<SingleProduct />} />
				<Route path='/checkout' exact element={<Checkout />} />
				<Route path='/*' exact element={<Error />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
