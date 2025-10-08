import '../styles.css'

function FooterComponent(){
    return(
        <footer className='footer'>
            <p>Winward Hills {new Date().getFullYear()}</p>
        </footer>
    )
}
export default FooterComponent;