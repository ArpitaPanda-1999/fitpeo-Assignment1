import { Link } from "react-router-dom";
import { FaHippo } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { BsFillFileBarGraphFill } from "react-icons/bs";
import { BsClipboard2Fill } from "react-icons/bs";
import { IoWalletSharp } from "react-icons/io5";
import { FaSuitcase } from "react-icons/fa6";
import { PiSignOutBold } from "react-icons/pi";


const Dashboard = () => {
    return(
        <div>
            <div className="col-lg-1">
                <div className="d-flex flex-column vh-100" id="sidebar">
                    <Link>
                        <FaHippo className="fs-4 text-white ms-5 mt-4"/>
                    </Link>
                    <Link>
                         <ul className="list-unstyled">
                            <li>
                            <AiFillHome className="fs-5 text-white ms-5 mt-5"/>
                            </li>
                            <li>
                            <BsFillFileBarGraphFill className="fs-5 text-white ms-5 mt-5"/>
                            </li>
                            <li>
                            <BsClipboard2Fill className="fs-5 text-white ms-5 mt-5"/>
                            </li>
                            <li>
                            <IoWalletSharp className="fs-5 text-white ms-5 mt-5"/>
                            </li>
                            <li>
                            <FaSuitcase className="fs-5 text-white ms-5 mt-5 mb-5"/>
                            </li>
                         </ul>
                    </Link>
                    <footer className="mt-auto">
                        <div class="btn-group dropup">
                            <button type="button" id="dropdown" class="btn btn-secondary border-0 dropdown-toggle ms-3" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="passport-photo-measurement.webp" className="rounded-circle me-3" width="30" height="30" />
                            </button>
                            <ul class="dropdown-menu p-4">
                                <li className="mb-2">Home</li>
                                <li className="mb-2">Logout</li>
                                <li className="mb-2">Settings</li>
                                <hr className="dropdown-divider" />
                                <li className="mb-2">Help</li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </div>
            <div className="col-lg-11">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Navbar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Link</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><hr class="dropdown-divider"/></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                </li>
                            </ul>
                            <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
};
export default Dashboard;