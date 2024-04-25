import React from 'react'
import '../../src/sass/index.scss'

const NavBar = (props) => {
    return (
        <>
            <nav>
                <div className="navbar">
                    <div className="nav-left">
                        <div className="logo-icon">
                            <i className="fa-regular fa-compass"></i>
                        </div>
                        <div className="domain">{props.title}</div>
                    </div>

                    <div className="nav-mid">
                        <div className="search-bar">
                            <div className="search-icon">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <input type="text" placeholder="Search..." />
                        </div>
                    </div>

                    <div className="nav-right">
                        <div className="notification">
                            <i className="fa-regular fa-envelope"></i>
                        </div>
                        <div className="account">
                            <div className="account-avatar">
                                {/* <!-- Include Image for account avatar --> */}
                                <img src="./src/assets/avatars/avarar2.png" alt="user" />
                            </div>
                        </div>
                        <div className="menu">
                            <div className="hamburger">
                                <i className="fa-solid fa-ellipsis-vertical"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar