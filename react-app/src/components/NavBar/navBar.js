import { Component } from "react"
import { MenuItems } from "./menuItems"
import { Button } from "./button"
import './navBar.css'

class NavBar extends Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render() {
        return (
            <nav className="NavBarItems">
                 <img src="https://web.gnosoft.com.co/wp-content/uploads/2019/12/cropped-logo-gnosoft-vertical.png" id="gnosoft-logo" href="#" />
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times':'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active':'nav-menu'}>
                    {MenuItems.map((item, index) =>{
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Button>Iniciar Sesión</Button>
            </nav>
        )
    }
}

export default NavBar;