
import './MainTitleContent.css'
import MainTitleText from './MainTitleText';
import LazyShow from '../../Anims/LazyShow';


const MainTitleContent = () => {
    return (
        <div className="Container">
            <div className='MainContent'>

                    <MainTitleText />
                
                <div className='Image'>
                    <LazyShow>
                        <img src='../PlaceHolder.svg'/>
                    </LazyShow>
                </div>
            </div>
        </div>
        );
};

export default MainTitleContent;