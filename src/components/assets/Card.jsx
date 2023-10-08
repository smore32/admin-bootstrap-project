
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
 const Card = (props) => {
    return (
        <div id="wrapper">
        <Sidebar/>
        <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Header/>
                    <div>{props.children}</div>
                </div>
            </div>
        </div>
         );
        
}
export default Card;