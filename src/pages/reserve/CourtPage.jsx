import FooterComponent from "../../components/FooterComponent";
import UserNavbarComponent from "../../components/UserNavbarComponent";
import styles from "../../css/servicestyles.module.css";
import courtImg from "../../assets/court_reservation_img.jpg";





function CourtPage(){
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
                <button className={`btn btn-warning fw-bold px-4 py-2 ${styles.reserve_btn}`}>Reserve now</button>
                </div>

                <div className="col-md-6 position-relative text-center">
                <img src={courtImg} className="img-fluid rounded shadow" alt="Clubhouse" />
                </div>

            </div>   
            </div>
            </div>
        </div>
        
    <FooterComponent/>
    </>      
    )

}
export default CourtPage;