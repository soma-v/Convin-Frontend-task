import { useRef , useState} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./main.css";
import Addbucket from "./Addbucket";
import PopUpForm from "./addBucketForm";
function Navbar() {
	const navRef = useRef();

	const [formVisible, setFormVisible] = useState(false);

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<nav ref={navRef}>
				<a href="Card.js">Home</a>
				<a href="/#"><PopUpForm /></a>
				<a href="/#">History</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
		
	);
}

export default Navbar;
