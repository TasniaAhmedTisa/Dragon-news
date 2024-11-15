import moment from "moment";
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className="flex flex-col items-center py-8">
           <div className="logo">
                <img src={logo} alt="" />
            </div>    
            <h1 className="text-gray-500">Journalism Without Fear or Favour</h1> 
            <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
            }</p>  
            
        </div>
    );
};

export default Header;