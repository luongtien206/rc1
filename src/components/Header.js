import React, {Component} from 'react';

class Header extends Component {
    render(){
        return(
            
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                <a href="!#" className="navbar-brand">Bai 2 : Component</a>
                <ul className="nav navbar-nav">
                    <li >
                        <a href="!#">Trang chu</a>
                    </li>
                    <li className="active">
                        <a href="!#">Danh muc san pham</a>
                    </li>
                </ul>
                </div>
            </nav>
            
        );
    }
}
export default Header;