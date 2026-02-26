import './header.css'
import LoginModal from './LoginModal';

function Header() {
    return(
        <>
           <header>
                <h1>Galvenais virsraksts</h1>
                <h2>Apakšvirsraksts</h2>
                <LoginModal></LoginModal>
            </header> 
        </>
    )
}
export default Header;