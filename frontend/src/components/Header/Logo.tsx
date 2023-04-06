import './Logo.css'

import NavLink from '../../components/ui/NavLink';

const Logo = () => {

    return (
        <div className='Logo'>

            <NavLink href="/" active>
                <img src="../Logo.svg" /> 
            </NavLink>
            
        </div>
    );
}

export default Logo;