import FooterComponent from '../components/FooterComponent';
import UserNavbarComponent from '../components/UserNavbarComponent';
import style from '../css/userhomestyles.module.css';



function UserHomePage(){
    return(
        <>
        <UserNavbarComponent/>
      
        <section className={style.hero_user}>
            <div className={style.hero_content}>
                <h1>Welcome to the WWHS Portal</h1>
            </div>
        </section>
        <FooterComponent/>
        </>
    )
}

export default UserHomePage;