import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import FindUs from "./FindUs";

const Right = () => {
    return (
        <div>
            <h1 className="px-8 font-bold">Login With</h1>
            <div className="flex flex-col gap-2 p-8">
            <button className="btn">
                <FcGoogle />Login with Google</button>
            <button className="btn"><FaGithub />Login with Github</button>
            <FindUs></FindUs>
            </div>
        </div>
    );
};

export default Right;