import FooterComponent from '../../components/FooterComponent';
import UserNavbarComponent from '../../components/UserNavbarComponent';
import '../../styles.css';
import '../../reservationstyles.css';

function ReservationPage(){
    return(
        <>
        <UserNavbarComponent/>

        <h> Reservation Type</h>


        <div className='reservation_cards'>
            <div className="card" style={{width: 50 + 'rem'}}>
                <image src="..." classname="card-img-top" alt="..."/>
                <div className="card-body">
                    <h1 className="card-title">Clubhouse</h1>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" className="btn btn-primary">Reserve now</a>
                </div>
            </div>

            <div className="card" style={{width: 50 + 'rem'}}>
                <image src="..." classname="card-img-top" alt="..."/>
                <div className="card-body">
                    <h1 className="card-title">Community Pool</h1>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" className="btn btn-primary">Reserve now</a>
                </div>
            </div>

            <div className="card" style={{width: 50 + 'rem'}}>
                <image src="..." classname="card-img-top" alt="..."/>
                <div className="card-body">
                    <h1 className="card-title">Court</h1>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" className="btn btn-primary">Reserve now</a>
                </div>
            </div>
        </div>


        <FooterComponent/>
        </>

    )
}
export default ReservationPage;