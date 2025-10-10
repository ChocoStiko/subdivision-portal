import FooterComponent from "../../components/FooterComponent";
import UserNavbarComponent from "../../components/UserNavbarComponent";
import styles from "../../css/servicestyles.module.css";
import poolImg from "../../assets/pool_reservation_img.jpg";
import PopupReserveComponent from "../../components/PopupReserveComponent";

function PoolPage(){
    return(
    <>
    <UserNavbarComponent/>
        <div className={styles.clubhouse_section}>
            <div className={`container py-5 ${styles.reservation_section}`}>
            <div id={styles.container}>
            <div className="row align-items-center">

    
                <div className="col-md-6">
                <h2 className={`fw-bold text-success ${styles.text_title}`}>Lorem ipsum dolor sit</h2>
                <p className="text-dark">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet ornare blandit.
                    Aliquam bibendum diam leo, sit amet luctus tellus consectetur at. Aenean mollis fringilla justo eget malesuada.
                </p>
                <p className="text-dark">
                    Curabitur ac erat ut magna tempor faucibus id et nisi. Nam imperdiet ornare blandit.
                </p>
                <PopupReserveComponent/>
                </div>

                <div className="col-md-6 position-relative text-center">
                <img src={poolImg} className="img-fluid rounded shadow" alt="Clubhouse" />
                </div>

            </div>   
            </div>
            </div>
        </div>
        
    <FooterComponent/>
    </>
    )

}
export default PoolPage;