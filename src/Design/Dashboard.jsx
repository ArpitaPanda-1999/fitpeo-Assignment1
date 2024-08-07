import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsFillFileBarGraphFill } from "react-icons/bs";
import { BsClipboard2Fill } from "react-icons/bs";
import { IoWalletSharp } from "react-icons/io5";
import { FaSuitcase } from "react-icons/fa6";
import { IoLogoAngular } from "react-icons/io5";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { MdMessage } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { GoBellFill } from "react-icons/go";
import { FaBasketShopping } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { BsWalletFill } from "react-icons/bs";
import { IoArrowDownCircle } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { BiTargetLock } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { GiWallet } from "react-icons/gi";
import { BiSolidDish } from "react-icons/bi";
import { FaStar } from "react-icons/fa";


const Dashboard = () => {
    
    return(
        <div className="container-fluidg-0 row">
            <div className="col-lg-1" id="sidebar">
                <div className="d-flex flex-column vh-100 sticky-top">                   
                    <Link>
                        <IoLogoAngular className="fs-1 mt-3 mb-3" id="logo-A"/>
                    </Link>
                    <Link>
                         <ul className="list-unstyled">
                            <li id="side-icon">
                                <AiFillHome className="fs-5 ms-5 mt-4 mb-4" />
                            </li>
                            <li id="side-icon">
                                <BsFillFileBarGraphFill className="fs-5 ms-5 mt-4 mb-4" />
                            </li>
                            <li id="side-icon">
                                <BsClipboard2Fill className="fs-5 ms-5 mt-4 mb-4" />
                            </li>
                            <li id="side-icon">
                                <IoWalletSharp className="fs-5 ms-5 mt-4 mb-4" />
                            </li>
                            <li id="side-icon">
                                <FaSuitcase className="fs-5 ms-5 mt-4 mb-4" />
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

            {/*------------------------------------- sidebar ------------------------------------*/}
            
            <div className="col-lg-11 h-100" id="navbar">
                <nav className="navbar navbar-expand-lg text-white d-flex flex-column">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="input-group w-25">
                                <span className="input-group-text bg-dark text-white" id="basic-addon1">
                                    <HiOutlineMagnifyingGlass className="fs-5" />
                                </span>
                                <input type="text" className="form-control bg-dark text-light" id="border-search" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item" id="nav-icon">
                                    <a className="nav-link text-white" aria-current="page" href="#">
                                        <MdMessage className="fs-5" />
                                    </a>
                                </li>
                                <li className="nav-item" id="nav-icon">
                                    <a className="nav-link text-white" href="#">
                                        <IoMdSettings className="fs-5" />
                                    </a>
                                </li>
                                <li className="nav-item" id="nav-icon">
                                    <a className="nav-link text-white" href="#">
                                        <GoBellFill className="fs-5" />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <img src="passport-photo-measurement.webp" className="rounded-circle me-3" width="30" height="30" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/*------------------------------- navbar---------------------------------- */}
                
                <div className="bg-dark container-fluid">
                    <h4 className="text-white pb-3 pt-3">Dashboard</h4>
                    <div className="row">
                        <div className="col-lg-8 row">
                            <div className="col-lg-3">
                                <div className="box">
                                    <FaBasketShopping className="fs-1" id="basket"/>
                                    <h6>Total Orders</h6>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <h5 className="text-start text-light">75$</h5>
                                        </div>
                                        <div className="col-lg-6">
                                            <h6 className="text-end text-danger">
                                                <IoMdArrowDropdown className="fs-5 text-danger" />-10%
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="box">
                                    <FaShoppingBag className="fs-1" id="shopping"/>
                                    <h6>Total Delivered</h6>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <h5 className="text-start text-light">120$</h5>
                                        </div>
                                        <div className="col-lg-6">
                                            <h6 className="text-end text-success">
                                                <IoMdArrowDropup className="fs-5 text-success" />+8%
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="box">
                                    <BsWalletFill className="fs-1" id="wallet"/>
                                    <h6>Total Cancelled</h6>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <h5 className="text-start text-light">100$</h5>
                                        </div>
                                        <div className="col-lg-6">
                                            <h6 className="text-end text-success">
                                                <IoMdArrowDropup className="fs-5 text-success" />+9%
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="box">
                                    <IoArrowDownCircle className="fs-1" id="arrow"/>
                                    <h6>Total Revenue</h6>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <h5 className="text-start text-light">80$</h5>
                                        </div>
                                        <div className="col-lg-6">
                                            <h6 className="text-end text-danger">
                                                <IoMdArrowDropdown className="fs-5 text-danger" />-1%
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="row first-row">
                                <div className="col-lg-7">
                                    <div className="">
                                        <h6 className="text-light pb-3">Net profit</h6>
                                        <h3 className="text-light">$6754.05</h3>
                                        <h6 className="text-success pt-2">
                                            <IoMdArrowDropup className="fs-5 text-success" />+9%
                                        </h6>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div class="pie animate" id="pie-animate">
                                        <p className="text-light fs-6" id="pie-percent">70%</p>
                                        <p className="text-light" id="pie-percent1">Order Completed</p>
                                    </div>
                                    <p className="text-light mt-1" id="pie-percent1">Net Order Completed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --------------------------------- dashboard---------------------------------- */}

                    <div className="row mt-3">
                        <div className="col-lg-8">
                            <div id="start-second">
                                <div className="row pt-3">
                                    <div className="col-lg-6">
                                        <h4 className="text-light ">Activity</h4>
                                    </div>
                                    <div className="col-lg-6 text-end">
                                        <div class="dropdown-center">
                                            <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Weekly
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#">Monthly</a></li>
                                                <li><a class="dropdown-item" href="#">Quaterly</a></li>
                                                <li><a class="dropdown-item" href="#">Yearly</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="row ps-4">
                                    <div className="col-lg-1 col-sm-1">
                                        <div className="graph"></div>
                                        <p className="text-light graph-text">30%</p>
                                    </div>
                                    <div className="col-lg-1 col-sm-1">
                                        <div className="graph1"></div>
                                        <p className="text-light graph-text1">50%</p>
                                    </div>
                                    <div className="col-lg-1 col-sm-1">
                                        <div className="graph2"></div>
                                        <p className="text-light graph-text2">100%</p>
                                    </div>
                                    <div className="col-lg-1 col-sm-1">
                                        <div className="graph3"></div>
                                        <p className="text-light graph-text3">20%</p>
                                    </div>
                                    <div className="col-lg-1 col-sm-1">
                                        <div className="graph4"></div>
                                        <p className="text-light graph-text4">26%</p>
                                    </div>
                                    <div className="col-lg-1 col-sm-1">
                                        <div className="graph5"></div>
                                        <p className="text-light graph-text5">32%</p>
                                    </div>
                                    <div className="col-lg-1 col-sm-1">
                                        <div className="graph6"></div>
                                        <p className="text-light graph-text6">10%</p>
                                    </div>
                                    <div className="col-lg-1 col-sm-1">
                                        <div className="graph7"></div>
                                        <p className="text-light graph-text7">85%</p>
                                    </div>
                                    <div className="col-lg-1 col-sm-1">
                                        <div className="graph8"></div>
                                        <p className="text-light graph-text8">25%</p>
                                    </div>
                                    <div className="col-lg-1 col-sm-1">
                                        <div className="graph9"></div>
                                        <p className="text-light graph-text9">40%</p>
                                    </div>
                                    <div className="col-lg-1 col-sm-1">
                                        <div className="graph10"></div>
                                        <p className="text-light graph-text10">50%</p>
                                    </div>
                                    <div className="col-lg-1 col-sm-1">
                                        <div className="graph11"></div>
                                        <p className="text-light graph-text11">60%</p>
                                    </div>
                                    <hr className="text-light" id="hr-line"/>
                                </div>
                            </div>
                        </div> 


                        <div className="col-lg-4">
                            <div className="row me-3" id="target-start">
                                <div className="col-lg-9">
                                    <div className="row p-4">
                                        <div className="col-lg-2 target-icon">
                                            <BiTargetLock className="fs-5" id="target"/>
                                        </div>
                                        <div className="col-lg-10">
                                            <h6 className="text-light mt-3">Goals</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <IoIosArrowForward className="fs-5" id="side-arrow"/>
                                </div>
                                <div className="col-lg-9">
                                    <div className="row p-4">
                                        <div className="col-lg-2 wallet1-icon">
                                            <GiWallet className="fs-5" id="wallet1"/>
                                        </div>
                                        <div className="col-lg-10">
                                            <h6 className="text-light mt-3">Goals</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <IoIosArrowForward className="fs-5" id="side-arrow"/>
                                </div>
                                <div className="col-lg-9">
                                    <div className="row p-4">
                                        <div className="col-lg-2 dish-icon">
                                            <BiSolidDish className="fs-5" id="dish"/>
                                        </div>
                                        <div className="col-lg-10">
                                            <h6 className="text-light mt-3">Goals</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <IoIosArrowForward className="fs-5" id="side-arrow"/>
                                </div>
                            </div>
                        </div>
                    </div>    

                    {/* --------------------------------- second row ---------------------------------- */}
                     
                    <div className="row mt-3">
                        <div className="col-lg-8" >
                            <div id="start-third">
                                <h4 className="text-light mb-3">Recent Orders</h4>
                                <div className="row d-flex flex-column">
                                    <div className=" col-lg-12 last-row">
                                        <span className="text-light name">Customer</span>
                                        <span className="text-light">Order No.</span>
                                        <span className="text-light">Amount</span>
                                        <span className="text-light">Status</span>
                                        <hr className="text-secondary mt-2" />
                                    </div>
                                    <div className="col-lg-12 last-row1">
                                        <span className="text-light name">
                                            <img src="passport-photo-measurement.webp" className="img-fluid me-2" id="profile-img"/> Alex Doe
                                        </span>
                                        <span className="text-light">#12345</span>
                                        <span className="text-light">$100</span>
                                        <span className="text-success del-button">Delivered</span>
                                        <hr className="text-secondary mt-2" />
                                    </div>
                                    <div className="col-lg-12 last-row2">
                                        <span className="text-light name">
                                            <img src="passport-photo-measurement.webp" className="img-fluid me-2" id="profile-img"/> Micelle Thomas
                                        </span>
                                        <span className="text-light">#12345</span>
                                        <span className="text-light">$100</span>
                                        <span className="text-danger pen-button">Pending</span>
                                        <hr className="text-secondary mt-2" />
                                    </div>
                                    <div className="col-lg-12 last-row3">
                                        <span className="text-light name">
                                            <img src="passport-photo-measurement.webp" className="img-fluid me-2" id="profile-img"/> Dave John
                                        </span>
                                        <span className="text-light">#12345</span>
                                        <span className="text-light">$100</span>
                                        <span className="text-success del-button">Delivered</span>
                                        <hr className="text-secondary mt-2" />
                                    </div>
                                    <div className="col-lg-12 last-row4">
                                        <span className="text-light name">
                                            <img src="passport-photo-measurement.webp" className="img-fluid me-2" id="profile-img"/> Barak Thomas
                                        </span>
                                        <span className="text-light">#12345</span>
                                        <span className="text-light">$100</span>
                                        <span className="text-success del-button">Delivered</span>
                                        <hr className="text-secondary mt-2" />
                                    </div>
                                    <div className="col-lg-12 last-row5">
                                        <span className="text-light name">
                                            <img src="passport-photo-measurement.webp" className="img-fluid me-2" id="profile-img"/> Johnson Doe
                                        </span>
                                        <span className="text-light">#12345</span>
                                        <span className="text-light">$100</span>
                                        <span className="text-danger pen-button">Pending</span>
                                        <hr className="text-secondary mt-2" />
                                    </div>
                                    <div className="col-lg-12 last-row6">
                                        <span className="text-light name">
                                            <img src="passport-photo-measurement.webp" className="img-fluid me-2" id="profile-img"/> Patric Thomas
                                        </span>
                                        <span className="text-light">#12345</span>
                                        <span className="text-light">$100</span>
                                        <span className="text-success del-button">Delivered</span>
                                        <hr className="text-secondary mt-2" />
                                    </div>
                                    <div className="col-lg-12 last-row7">
                                        <span className="text-light name">
                                            <img src="passport-photo-measurement.webp" className="img-fluid me-2" id="profile-img"/> Lilly Doe
                                        </span>
                                        <span className="text-light">#12345</span>
                                        <span className="text-light">$100</span>
                                        <span className="text-success del-button">Delivered</span>
                                        <hr className="text-secondary mt-2" />
                                    </div>
                                    <div className="col-lg-12 last-row8">
                                        <span className="text-light name">
                                            <img src="passport-photo-measurement.webp" className="img-fluid me-2" id="profile-img"/> Sally Doe
                                        </span>
                                        <span className="text-light">#12345</span>
                                        <span className="text-light">$100</span>
                                        <span className="text-danger pen-button">Pending</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4">
                            <div className="row me-3 final-row">
                                <h4 className="text-light">Customer's Feedback</h4>
                                <div className="col-lg-12 mt-3">
                                    <span className="text-light">
                                        <img src="passport-photo-measurement.webp" className="img-fluid me-2" id="profile-img"/> Alex Doe
                                        <p className="d-flex mt-2 mb-1">
                                            <FaStar className="text-warning"/>
                                            <FaStar className="text-warning"/>
                                            <FaStar className="text-warning"/>
                                            <FaStar className="text-warning"/>
                                            <FaStar className="text-white"/>
                                        </p>
                                    </span>
                                    <p className="text-secondary">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                    <hr className="text-secondary" />
                                </div>
                                <div className="col-lg-12 mt-1">
                                    <span className="text-light">
                                        <img src="passport-photo-measurement.webp" className="img-fluid me-2" id="profile-img"/> Alex Doe
                                        <p className="d-flex mt-2 mb-1">
                                            <FaStar className="text-warning"/>
                                            <FaStar className="text-warning"/>
                                            <FaStar className="text-warning"/>
                                            <FaStar className="text-warning"/>
                                            <FaStar className="text-white"/>
                                        </p>
                                    </span>
                                    <p className="text-secondary">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                    <hr className="text-secondary" />
                                </div>
                                <div className="col-lg-12 mt-1">
                                    <span className="text-light">
                                        <img src="passport-photo-measurement.webp" className="img-fluid me-2" id="profile-img"/> Alex Doe
                                        <p className="d-flex mt-2 mb-1">
                                            <FaStar className="text-warning"/>
                                            <FaStar className="text-warning"/>
                                            <FaStar className="text-warning"/>
                                            <FaStar className="text-warning"/>
                                            <FaStar className="text-white"/>
                                        </p>
                                    </span>
                                    <p className="text-secondary">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
};
export default Dashboard;