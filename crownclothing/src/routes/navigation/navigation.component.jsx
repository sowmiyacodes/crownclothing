import { Outlet } from "react-router-dom";
function Navigation()
{
    return(
        <div>
            <div>
                <h1> The navigation bar</h1>
                
            </div>
            <Outlet/>
        </div>
    )
}

export default Navigation;