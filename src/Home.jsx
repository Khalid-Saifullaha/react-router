
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Footer from "./assets/components/Footer/Footer";
import Header from "./assets/components/Header/Header";

const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <Header></Header>
            {
                navigation.state === "loading" ?
                <p>Loading...</p>:
                <Outlet></Outlet>
            }
            
            <Footer></Footer>
        </div>
    );
};

export default Home;