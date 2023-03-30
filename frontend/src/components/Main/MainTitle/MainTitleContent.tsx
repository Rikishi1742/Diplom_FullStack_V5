
import './MainTitleContent.css'
import MainTitleText from './MainTitleText';

const MainTitleContent = () => {
    return (
        <div className="Container">
            <div className='MainContent'>

                <MainTitleText />
                
                <div className='Image'>
                    <img src='../PlaceHolder.svg'/>
                </div>
            </div>
        </div>
        );
};

export default MainTitleContent;