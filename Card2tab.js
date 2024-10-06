import Card2 from './Card2.js';
import './Card2.css'
function Card2tab(){
    
   return(
    <div className='contain'>
    <Card2 imgurl="XOstudio.webp" title='XO Studio' rate='4.7⭐ (40)' address='Sector 57, Sushant Lok-ii, Gurugram' serve='Hair Salon'/>
    <Card2 imgurl="Chi Nail Spa - JVT.jpg" title='Chi Nail Spa - JVT'  rate='4.9⭐ (199)' address='Jumeirah Village Triangle, Dubai' serve='Spa'/>
    <Card2 imgurl="Antheia Enhance.jpg" title='Antheia Enhance'  rate='4.5⭐ (20)' address='Chukkuwala, Dehradun' serve='Beauty Salon'/>
    <Card2 imgurl="Yousef Afandi Express-Jubaiha.jpg" title='Yousef Afandi Express-Jubaiha'  rate='5⭐ (6,852)' address='Al Jubeiha, Amman' serve='Barbers Shop'/>
    </div>
   )
}
export default Card2tab;