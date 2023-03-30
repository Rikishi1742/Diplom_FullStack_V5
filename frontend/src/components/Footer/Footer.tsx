import './Footer.css'
import FooterBottom from './FooterBottom';
import FooterTopEl from './FooterTopEl';

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='Container'>
                <FooterTopEl />
                <FooterBottom />
            </div>
        </div>
    );
}

export default Footer;