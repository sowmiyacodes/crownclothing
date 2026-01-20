import { Outlet,Link } from "react-router-dom";
import {Fragment} from 'react';
import "./navigation.styles.scss";
import {ReactComponent as CrwnLogo} from "../../assests/crown.svg"
function Navigation()
{
    return(
        <Fragment>
            <div className = "navigation">
                <Link className = 'logo-container' to = '/'>
                    <CrwnLogo className = 'logo'/>
                </Link>
               
                <div className = 'nav-links-container'>
                    <Link classname  = "nav-link" to ='/shop'> SHOP</Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;