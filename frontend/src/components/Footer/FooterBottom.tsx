import './FooterBottom.css';
import Logo from "../Header/Logo";


const FooterBottom = () => {
    return (
        <div className='FooterBottom'>
            <div className='FooterTopBottom'>
                <Logo />
                <div>
                    <p>Email: Gecko123@ggmail.ru</p> 
                    <p>User Care Department: +7 80 333 26 05</p>
                </div>

                <div>
                    <p>Contact Center: +7 800 555 35 35</p>
                    <p>Cheboksary, avenue. Mira, 40</p> 
                </div>
            </div>

            <hr/>

            <div className='FooterTopBottom'>

                <h2>© Gecko, 2023</h2>
                <div>
                    <p>We use cookies to personalize the services and ease of use.</p>
                    <p>If you do not agree to their use, change your browser settings.</p>
                </div>
            </div>
        </div>
    );
    
}

export default FooterBottom;