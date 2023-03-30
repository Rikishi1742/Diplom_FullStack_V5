import './Button.css'
import NavLink from '../../components/ui/NavLink';
import { Children } from 'react';

const Button = props => {

    if (props.type == "submit") {
        return (<input type='submit' value='Sign In' className={props.class}/>);
    };

    return (
        
        <NavLink href={props.href} active >
            <button onClick={props.onClick}><p>{props.Value}</p></button>
        </NavLink>
    );
    
}

export default Button