import Button from '../../Elements/Button';
import './MainTitleText.css';

const MainTitleText = () => {
    return (
        <div className='Text'>
            <h2>Learn to be</h2>
            <h2>the <b> Best</b></h2>
            <p>
                Educational and methodical
                complex for testing information 
                systems
            </p>
            <Button Value="Education" href="/Education"></Button>
        </div>
    );
}

export default MainTitleText;