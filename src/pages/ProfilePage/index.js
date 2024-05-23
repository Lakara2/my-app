import React, { useState } from "react";
import { Link } from "react-router-dom";
import defaultUserProfilePic from '../Dashboard/img/logo.png';
import undraw from "./img/undraw_profile.png";
import "./vendor/fontawesome-free/css/all.min.css";
import "./css/sb-admin-2.min.css";
import one from "./img/undraw_rocket.svg";
import oni from './img/onigramme.png'
import Footx from '../utils/comps/footx';
import diag from './img/diagramme.png';
import UserName from "../../components/User/UserName";

const Index = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div id="page-top">
            <div id="wrapper">
                <ul className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion" id="accordionSidebar">
                    <Link className='mt-5 mb-5 justify-content-center' to="/">
                        <img
                            src={defaultUserProfilePic} alt='logo' className='rounded-circle' />
                    </Link>
                    <a className="sidebar-brand mb-5 justify-content-center" href="/">
                        OFFICE DES TRANSMISSION MILITAIRE DE L'ETAT
                    </a>
                    <li className="nav-item active">
                        <a className="nav-link" href="/">
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span></a>
                    </li>
                    <div className="sidebar-heading">
                        Interface
                    </div>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/users" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <i className="fas fa-fw fa-cog"></i>
                            <span>Users</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/404" data-toggle="collapse" data-target="#collapseUtilities"
                            aria-expanded="true" aria-controls="collapseUtilities">
                            <i className="fas fa-fw fa-wrench"></i>
                            <span>Utilities</span>
                        </a>
                        <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                            data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Utilities:</h6>
                                <a className="collapse-item" href="/users">Users</a>
                                <a className="collapse-item" href="/equipements">Equipements</a>
                                <a className="collapse-item" href="/commande">Commande</a>
                                <a className="collapse-item" href="/other">Other</a>
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
                                <a className="collapse-item active" href="/" >Dashboard</a>
                                <div className="collapse-divider"></div>
                                <h6 className="collapse-header">Other Pages:</h6>
                                <a className="collapse-item" href="/404">404 Page</a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/404">
                            <i className="fas fa-fw fa-chart-area"></i>
                            <span>Charts</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/tables">
                            <i className="fas fa-fw fa-table"></i>
                            <span>Equipements</span></a>
                    </li>
                    <div className="text-center d-none d-md-inline">
                        <button className="rounded-circle border-0" id="sidebarToggle"></button>
                    </div>
                    <div className="sidebar-card d-none d-lg-flex">
                        <img className="sidebar-card-illustration mb-2" src={one} alt="..." />
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
                                          {isLoggedIn ? (
                                            <UserName />
                                          ) : (
                                            "invite(e)"
                                          )}
                                        </span>
                                        <Link className='mt-5 mb-5 justify-content-center' to="/profile">
                                            <img className="img-profile rounded-circle"
                                                src={undraw} />
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
                            <div className="row">
                                <div className="col-xl-8 col-lg-7">
                                    <div className="card shadow mb-4">
                                        <div
                                            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                            <h6 className="m-0 font-weight-bold text-primary">Organigramme de l’OTME</h6>
                                            <div className="dropdown no-arrow">
                                                <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                                    aria-labelledby="dropdownMenuLink">
                                                    <div className="dropdown-header">Dropdown Header:</div>
                                                    <a className="dropdown-item" href="#">Action</a>
                                                    <a className="dropdown-item" href="#">Another action</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a className="dropdown-item" href="#">Something else here</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body jkk">
                                            <div className="jkk">
                                                <img src={oni} className='img-thumbnail' id="myAreaChart" alt='onigramme' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-5">
                                    <div className="card shadow mb-4">
                                        <div
                                            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                            <h6 className="m-0 font-weight-bold text-primary">PRESENTATION GENERALE</h6>
                                            <div className="dropdown no-arrow">
                                                <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                                    aria-labelledby="dropdownMenuLink">
                                                    <div className="dropdown-header">Dropdown Header:</div>
                                                    <a className="dropdown-item" href="#">Action</a>
                                                    <a className="dropdown-item" href="#">Another action</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a className="dropdown-item" href="#">Something else here</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="mt-4 text-center small">
                                                Créé par le Décret N°96-426 du 21 juin 1996, complété par le décret N°2018-1465 du 31 octobre 2018, puis modifié et complété par le Décret N°2019-2203 du 11 décembre 2019, l’Office des Transmissions Militaires de l’Etat, désigné́ sous le sigle OTME et dénommé́ l’Office des Transmissions, est un Etablissement public, doté de la personnalité́ morale et jouissant de l’autonomie administrative et financière ; sa gestion n’est pas soumise aux dispositions du Décret 68-080 du 13 février 1968 portant Règlements Généraux de la Comptabilité́ Publique.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <div className="card shadow mb-4">
                                        <div className="card-header py-3">
                                            <h6 className="m-0 font-weight-bold text-primary">Gestion de Materiel</h6>
                                        </div>
                                        <div className="card-body">
                                            <ul>
                                                <li>Gestion des utilisateurs</li>
                                                <p>Enregistrement et suivi des informations relatives aux utilisateurs des équipements</p>

                                                <li>Suivi des équipements</li>
                                                <p>Enregistrement et suivi des différents équipements, y compris leur stockage, attribution et état.</p>

                                                <li>Gestion des commandes</li>
                                                <p>Enregistrement et suivi des commandes passées pour les équipements, y compris les quantités et les dates.</p>

                                                <li>Historique d’utilisation</li>
                                                <p>Enregistrement de suivi de l’historique d’utilisation pour chaque équipement, y compris les dates et les descriptions</p>

                                                <li>Historique de maintenance</li>
                                                <p>Enregistrement et suivi de l’historique de maintenance pour chaque équipement, y compris les coûts et les descriptions.</p>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="card shadow mb-4">
                                        <div className="card-header py-3">
                                            <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
                                        </div>
                                        <div className="card-body jkk">
                                            <div className="jkk">
                                                <img src={diag} className='img-thumbnail' alt='diagramme' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

            <script src="./vendor/jquery/jquery.min.js"></script>
            <script src="./vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

            <script src="./vendor/jquery-easing/jquery.easing.min.js"></script>

            <script src="./js/sb-admin-2.min.js"></script>

            <script src="./vendor/chart.js/Chart.min.js"></script>

            <script src="./js/demo/chart-area-demo.js"></script>
            <script src="./js/demo/chart-pie-demo.js"></script>

        </div>
    )
};


export default Index;