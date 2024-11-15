import { Link } from "react-router-dom";
import userIcon from "../assets/user.png"
const Navbar = () => {
    return (
        <div className="flex justify-between py-6 items-center">
            <div></div>
            <div className="flex gap-3">
            <Link to={"/"}>Home</Link>
            <Link to={"/"}>About</Link>
            <Link to={"/"}>Career</Link>
            </div>
            <div className="flex gap-4">
                <img src={userIcon} alt="" />
                <button className="btn btn-neutral rounded-none">Login</button>


            </div>
       
        </div>
    );
};

export default Navbar;