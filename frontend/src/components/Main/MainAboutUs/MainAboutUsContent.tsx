import LazyShow from '../../Anims/LazyShow';
import './MainAboutUsContent.css';
import MainComment from './MainComment';

const MainAboutUsContent = () => {
    return (
        <div className='Container'>
            <div className="AboutUsContent">
            <h2>About Us</h2>
            <p>Gecko is an <b>online educational platform</b> whose task is to provide an opportunity for each person to test their skills in <b>security testing</b></p>
            
            {
                <div className="Recall">
                    <MainComment class={"Comment"} personName={"Трофимов М."} commentText={"Нормик"}/>
                    <MainComment class={"CommentBig"} personName={"Платонов А."} commentText={"Норм"}/>
                    <MainComment class={"Comment"} personName={"Кумаров С."} commentText={"Намана"}/>
                </div>
            
            }
            
        </div>
        </div>
        
    );
}
export default MainAboutUsContent;