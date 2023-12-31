import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Menu(props) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };
  const navigate = useNavigate();
  
  return (
    <div className="dropdown min-h-full " onBlur={closeDropdown}>
      <button onClick={toggleDropdown} className="dropbtn h-full">
        <img src="./img/usermenu.png" alt="" />
      </button>
      {isOpen && (
        <div id="myDropdown" className="dropdown-content h-full">
          <p>Hello , {props.username}</p>

          <a href="/home">Add Experience</a>

          
        </div>
      )}
    </div>
  );
}
export default Menu;
