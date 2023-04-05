import './Button.css'
import NavLink from '../../components/ui/NavLink';
import { Children } from 'react';

const Button = props => {

    if (props.type == "submit") {
        return (<input type='submit' value={props.Value} className={props.class} onClick={props.onClick}/>);
    } else if(props.type=="js") {

        return (<button onClick={props.onClick}><p>{props.Value}</p></button>);

    } else {

        return (  
            <NavLink href={props.href} active >
                <button onClick={props.onClick}><p>{props.Value}</p></button>
            </NavLink>
        );
    };

    
    
}

export default Button