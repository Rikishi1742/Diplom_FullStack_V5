import './FooterTopEl.css';

const FooterTopEl = () => {
    return (
        <div className='FooterTop'>
            <div>
                <h2>SiteMap</h2>
                <hr></hr>
                <a href='#'>Main page</a>
                <br/>
                <a href='#'>About Us</a>
                <br/>
                <a href='#'>Education</a>
            </div>

            <div>
                <h2>Autor</h2>
                <hr></hr>
                <p>Platonov Anton</p>
                <p>Group IR3-19</p>
            </div>
        </div>
    );
}

export default FooterTopEl;