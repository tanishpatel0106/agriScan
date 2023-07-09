import {Outlet} from "react-router-dom";

import ResponsiveAppBar from "./ResponsiveAppBar.jsx";

const SharedLayout = () => {


    return (
            <main >
                <ResponsiveAppBar />
                <div>
                    <Outlet />
                </div>
            </main>
    );
};

export default SharedLayout;
