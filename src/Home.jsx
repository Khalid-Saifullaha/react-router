
import { Outlet } from "react-router-dom";
import Footer from "./assets/components/Footer/Footer";
import Header from "./assets/components/Header/Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;