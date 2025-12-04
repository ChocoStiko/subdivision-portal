import '../styles.css';
import UserNavbarComponent from "../components/UserNavbarComponent";

function HeroComponent(){
    return(
        <>
            <UserNavbarComponent/>
      
        <section className="hero">
            <div className="title">
                <h1>Windward Hills<br/>Subdivision</h1>
                <p className="description">Welcome to Windward Hills Subdivision, a close-knit community where comfort and convenience come together. With nearby schools, supermarkets, and the parish just a short distance away, residents enjoy a peaceful lifestyle with the advantage of easy access through the public road. It’s a place where families grow, connect, and truly belong.</p>
            </div>
        </section>
        </>
    );
}

export default HeroComponent;