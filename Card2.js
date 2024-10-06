import './Card2.css';
import img1 from './Images/XOstudio.webp';


function Card2({ imgurl, title,rate,address,serve})
{
    return(
        <div className='service' >
        <img src={require('./Images/'+imgurl)} alt="Description" />
        <h3>{title}</h3>
        <span>{rate}</span>
        <p>{address}</p>
        <span id='type'>{serve}</span>
        </div>
    );
}
export default Card2;