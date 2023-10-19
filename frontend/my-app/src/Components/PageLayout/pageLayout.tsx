import { Outlet } from "react-router-dom";
import Header from "../Header/header";

const PageLayout = () => {
    return (
        <main>
            <Header />
            <Outlet />
        </main>
    )
}

export default PageLayout