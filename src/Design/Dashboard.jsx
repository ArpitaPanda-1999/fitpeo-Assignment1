import { Link } from "react-router-dom";
import { FaHippo } from "react-icons/fa6";

const Dashboard = () => {
    return(
        <div>
            <div className="col-lg-2">
                <div className="d-flex flex-column bg-dark">
                    <Link>
                        <FaHippo className="fa-3x"/>
                    </Link>
                    <Link>
                         <ul>
                             <li>Home</li>
                             <li>Profile</li>
                             <li>Settings</li>
                         </ul>
                    </Link>
                </div>
            </div>
            <div className="col-lg-10"></div>
        </div>
    )
};
export default Dashboard;