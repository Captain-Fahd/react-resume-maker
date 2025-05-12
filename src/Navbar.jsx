import MainIcon from "./components/MainIcon.jsx";
import './styles/Navbar.css'

function Navbar() {
    const handleclick = () => {
        window.location.href = 'http://localhost:5173/';
    }

    return (
     <nav>
         <div className="icon">
             <MainIcon text="Resume Maker"
                       fontSize={25} handleClick={handleclick}
                       className="icon-button"
                       backgroundColor="white"
                       border="none"
             />
         </div>
     </nav>
    );
}

export default Navbar;