import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../vendor/fontawesome-free/css/all.min.css";
import "../css/sb-admin-2.min.css";
import zero from "../img/undraw_profile.svg";
import defaultUserProfilePic from '../../Dashboard/img/logo.png';
import Footx from "../../utils/comps/footx";
import UserName from "../../../components/User/UserName";
import axios from "axios";

const NotFound = () => {

    const { id } = useParams();
    const [user, setUser] = useState("inviter");

    useEffect(() => {
        const fetchUser = async () => {
            axios.get(`${process.env.REACT_APP_API_URL}/users/${id}`)
            .then((r) => setUser(r.data))
            .catch((e) => console.log(e));
        };
        fetchUser();
    }, [id]);

    return (
        <div id="page-top bg-dark">
            <div id="wrapper">
                <ul className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion" id="accordionSidebar">
                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                        <Link className='mt-5 mb-5 justify-content-center' to="/">
                            <img
                                src={defaultUserProfilePic} alt='logo' className='rounded-circle' />
                        </Link>
                    </a>
                    <a className="sidebar-brand mb-5 justify-content-center" href="/">
                        OFFICE DES TRANSMISSION MILITAIRE DE L'ETAT
                    </a>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <div className="sidebar-heading">
                        Interface
                    </div>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <i className="fas fa-fw fa-cog"></i>
                            <span>Components</span>
                        </a>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Custom Components:</h6>
                                <a className="collapse-item" href="">Buttons</a>
                                <a className="collapse-item" href="">Cards</a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true"
                            aria-controls="collapsePages">
                            <i className="fas fa-fw fa-folder"></i>
                            <span>Pages</span>
                        </a>
                        <div id="collapsePages" className="collapse show" aria-labelledby="headingPages"
                            data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Login Screens:</h6>
                                <a className="collapse-item" href="/login">Login</a>
                                <a className="collapse-item" href="/signup">Register</a>
                                <a className="collapse-item" href="/forgot-password">Forgot Password</a>
                                <div className="collapse-divider"></div>
                                <h6 className="collapse-header">Other Pages:</h6>
                                <a className="collapse-item active" href="/404">404 Page</a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/404">
                            <i className="fas fa-fw fa-chart-area"></i>
                            <span>Charts</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/equipements">
                            <i className="fas fa-fw fa-table"></i>
                            <span>Equipements</span></a>
                    </li>
                    <div className="text-center d-none d-md-inline">
                        <button className="rounded-circle border-0" id="sidebarToggle"></button>
                    </div>

                </ul>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                                <i className="fa fa-bars"></i>
                            </button>
                            <form
                                className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                <div className="input-group">
                                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                                        aria-label="Search" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            <i className="fas fa-search fa-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item dropdown no-arrow d-sm-none">
                                    <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-search fa-fw"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                        aria-labelledby="searchDropdown">
                                        <form className="form-inline mr-auto w-100 navbar-search">
                                            <div className="input-group">
                                                <input type="text" className="form-control bg-light border-0 small"
                                                    placeholder="Search for..." aria-label="Search"
                                                    aria-describedby="basic-addon2" />
                                                <div className="input-group-append">
                                                    <button className="btn btn-primary" type="button">
                                                        <i className="fas fa-search fa-sm"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </li>

                                <div className="topbar-divider d-none d-sm-block"></div>
                                <li className="nav-item dropdown no-arrow">
                                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="mr-2 d-none d-lg-inline text-dark small">
                                            {"invite(e)" && <UserName user={user} />}</span>
                                        <Link className='mt-5 mb-5 justify-content-center' to="/">
                                            <img className="img-profile rounded-circle"
                                                src={zero} />
                                        </Link>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="userDropdown">
                                        <a className="dropdown-item" href="#">
                                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Profile
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Settings
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Activity Log
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Logout
                                        </a>
                                    </div>
                                </li>

                            </ul>

                        </nav>
                        <div className="container-fluid">
                            <div className="text-center">
                                <div className="error mx-auto" data-text="404">404</div>
                                <p className="lead text-gray-800 mb-5">Page Not Found</p>
                                <p className="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
                                <a href="/">&larr; Back to Dashboard</a>
                            </div>

                        </div>

                    </div>
                    <Footx />
                </div>

            </div>
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a>
            <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                            <a className="btn btn-primary" href="/login">Logout</a>
                        </div>
                    </div>
                </div>
            </div>

            <script src="../vendor/jquery/jquery.min.js"></script>
            <script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

            <script src="../vendor/jquery-easing/jquery.easing.min.js"></script>

            <script src="../js/sb-admin-2.min.js"></script>

        </div>
    )
};

export default NotFound;