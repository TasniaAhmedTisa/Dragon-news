import { FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa";

const FindUs = () => {
    return (
        <div className="m-4">
            <h1 className="mb-4 font-semibold">Find Us On </h1>
            <div className="join flex join-vertical border rounded-none ">
              <button className="btn join-item justify-start "><FaFacebook />
              Facebook</button>
              <button className="btn join-item justify-start"><FaTwitter />
              Twitter</button>
              <button className="btn join-item justify-start"><FaInstagram />
              Instagram</button>
            </div>
            
        </div>
    );
};

export default FindUs;
