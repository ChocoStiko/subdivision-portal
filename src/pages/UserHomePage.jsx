import FooterComponent from '../components/FooterComponent';
import HeroComponent from '../components/HeroComponent';
import UserNavbarComponent from '../components/UserNavbarComponent';
import '../styles.css';



function UserHomePage(){
    return(
        <>
        <UserNavbarComponent/>
        <HeroComponent/>

        <FooterComponent/>
        </>
    )
}

export default UserHomePage;