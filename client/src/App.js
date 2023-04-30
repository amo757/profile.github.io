import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import CsP from "./components/CsP";
import About from "./components/About";
import Contact from "./components/Contact";
import Forum from "./components/Forum";
import Auctions from "./components/Auctions";
import Profile from "./components/Profile";
import Documents from "./components/Documents";
import EmailVerify from "./components/EmailVerify";
import NavbarProfile from "./components/NavbarProfile";

function App() {
	
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/users/:id/verify/:token" element={<EmailVerify />} />
			<Route path="/csp" element={<CsP />} />			
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/auctions" element={<Auctions />} />
			<Route path="/profile" element={<Profile />} />
            <Route path="/documents" element={<Documents />} />
			<Route path="/NavbarProfile" element={<NavbarProfile />} />
		</Routes>
	);
}

export default App;
