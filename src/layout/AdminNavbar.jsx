import { Link, NavLink } from "react-router-dom"
import Logout from "../components/Logout"
import Logo from '../assets/images/logo.png'

const AdminNavbar = () => {
    return (
        <div className="headerCon">
            <div>
                <img src={ Logo } alt="stroem-logo" className="headerLogo" />
            </div>
            <div className="navigationCon">
                <div className="navigation">
                    <nav>
                        <ul className="menus">
                            <li>
                                <NavLink
                                    to="/admin"
                                    className={ ( { isActive } ) =>
                                        isActive ? "activeClassName" : undefined
                                    }>
                                    <span className="spanHover">Admin Hjem</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="forsideadmin"
                                    className={ ( { isActive } ) =>
                                        isActive ? "activeClassName" : undefined
                                    }>
                                    <span className="spanHover">Forside</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="serviceadmin"
                                    className={ ( { isActive } ) =>
                                        isActive ? "activeClassName" : undefined
                                    }>
                                    <span className="spanHover">Service</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="omadmin"
                                    className={ ( { isActive } ) =>
                                        isActive ? "activeClassName" : undefined
                                    }>
                                    <span className="spanHover">Om Os</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="faqadmin"
                                    className={ ( { isActive } ) =>
                                        isActive ? "activeClassName" : undefined
                                    }>
                                    <span className="spanHover">FAQ</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="newsadmin"
                                    className={ ( { isActive } ) =>
                                        isActive ? "activeClassName" : undefined
                                    }>
                                    <span className="spanHover">Nyheder</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="kontaktadmin"
                                    className={ ( { isActive } ) =>
                                        isActive ? "activeClassName" : undefined
                                    }>
                                    <span className="spanHover">Kontakt</span>
                                </NavLink>
                            </li>
                            <li><Logout /></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default AdminNavbar