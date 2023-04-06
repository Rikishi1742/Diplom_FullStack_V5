import { LazyMotion } from 'framer-motion';
import './MainComment.css';

const MainComment = props => {

    return (
            <div className={props.class}>
                <h3>{props.personName}</h3>
                <p>{props.commentText}</p>
            </div>
    );
}

export default MainComment;