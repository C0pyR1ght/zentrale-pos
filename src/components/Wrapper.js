import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Wrapper extends Component {

    render() {
        return (
        <div id="wrapper">
            {/* Sidebar */}
            <ul className="navbar-nav sidebar sidebar-dark active" id="sidebar">
                {/* Sidebar - Brand */}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <img src="/pos-logo.png" height="30" style={{ height: "30px" }} className="sidebar-brand-text" />
                </a>
                {/* Divider */ }
                <hr className="sidebar-divider my-0" />
                {/* Nav Item - Dashboard */}
                <li className="nav-item">
                    <Link to="/">
                    <a className="nav-link">
                        <i className="fas fa-fw fa-tachometer-alt" />
                        <span>Dashboard</span></a>
                    </Link>
                </li>
                {/* Divider */}
                <hr className="sidebar-divider" />
                {/* Heading */}
                <div className="sidebar-heading">
                    Getränke
                </div>
                {/* Nav Item - Charts */}
                <li className="nav-item">
                  <Link to="/">
                    <a className="nav-link" href="/">
                        <i className="fas fa-shopping-cart" />
                        <span>Bestellen</span>
                      </a>
                    </Link>
                </li>
                <li className="nav-item">
                  <Link to="/myaccountselection">
                    <a className="nav-link" href="/">
                        <i className="fas fa-user" />
                        <span>Mein Konto</span>
                      </a>
                    </Link>
                </li>
                {/* Divider */}
                <hr className="sidebar-divider d-none d-md-block" />
                {/* Sidebar Toggler (Sidebar) */}
                  <div className="text-center d-none d-md-inline">
                      <button className="rounded-circle border-0" id="sidebarToggle" />
                  </div>
            </ul>
            {/* End of Sidebar */}
            {/* Content Wrapper */}
            <div id="content-wrapper" className="d-flex flex-column">
                {/* Main Content */}
                <div id="content">
                    {/* Topbar */}
                    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                        {/* Sidebar Toggle (Topbar) */}

                        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                            <i className="fa fa-bars" />
                        </button>
                        <button type="button" id="sidebarCollapse" className="btn">
                            <i className="fas fa-align-left"></i>
                        </button>
                        <Link to="/">
                            <button type="button" id="backToMenu" className="btn">
                                <i className="fas fa-chevron-left"></i>
                                <span style={{ marginLeft: "10px" }}>Hauptmenü</span>
                            </button>
                        </Link>

                        {/* Topbar Navbar */}
                        <ul className="navbar-nav ml-auto">
                        </ul>
                    </nav>
                    {/* End of Topbar */}
                    {/* Begin Page Content */}
                    <div className="container-fluid">
                        { this.props.children }
                    </div>
                    {/* /.container-fluid */}
                </div>
                {/* End of Main Content */}
            </div>
            {/* End of Content Wrapper */}
        </div>
    );
    }
}

export default Wrapper;
