
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavMenu from './components/NavMenu';
import About from './pages/About';
import FreePricing from './pages/FreePricing';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import PremiumPricing from './pages/PremiumPricing';
import Pricing from './pages/Pricing';
import Prime from './pages/Prime';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import ProtectedRoute from './pages/ProtectedRoute';

function App () {
	return (
		<div className="App">
			<NavMenu />
			<Routes>
				<Route path="/about" element={<About />} />
				<Route path="/login" element={<Login />} />
				<Route path="/pricing" element={<Pricing />}>
					<Route path='free' element={<FreePricing />} ></Route>
					<Route path='premium' element={<PremiumPricing />} ></Route>
				</Route>
				<Route path='/user/:userId' element={<Profile />} />
				<Route path='/user/:userId/:projectId' element={<Projects />} />
				<Route element={<ProtectedRoute />} >
					<Route path='/prime' element={<Prime />} />
				</Route>

				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
