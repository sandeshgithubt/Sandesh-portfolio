
import HeroImg from '../components/HeroImg';
import Navbar from '../components/Navbar';
import Work from '../components/Work';
import AboutContent from '../components/AboutContent';
import Forms from '../components/Forms';
import Footer from '../components/Footer';


const Home = () => {
    return(
        <>
            <Navbar/>
            <HeroImg/>
            <Work/>
            <AboutContent/>
            <Forms/>
            <Footer/>
        </>

    );
}

export default Home;