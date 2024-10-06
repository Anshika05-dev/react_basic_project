import Card from './EndCard.js';
import './EndCard.css'
function EndCardtab(){
    
   return(
    <div className='container'>
    <Card title='The best booking system' idx={0} name='Lucy'/>
    <Card title='Easy to use & explore' idx={1} name='Dan'/>
    <Card title='Great for finding barbers' idx={2} name='Dale'/>
    <Card title='My go-to for self-care' idx={3} name='Dale'/>
    </div>
   )
}
export default EndCardtab;