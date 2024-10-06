import './EndCard.css'
function EndCard({title,idx,name})
{
    let des=["Great experience, easy to book. Paying for treatments is so convenient — no cash or cards needed!",
        "Fresha's reminders make life so much easier. I also found a few good barbershops that I didn’t know existed.",
    "I've been using Fresha for two years and it's by far the best booking platform I've used. Highly recommend it!",
    "Fresha is my go-to app for massages and facials. I can easily find and book places near me — I love it!"]
    let city=["London, UK","New York, USA","Sydney, Australia","Edinburgh, UK"]
    return(
    <div className='card'>
        <p className='star'>⭐⭐⭐⭐⭐</p>
    <h3>{title}</h3>
    <span>{des[idx]}</span>
    <h5>{name}</h5>
    <p>{city[idx]}</p>
    </div>
    )
}
export default EndCard;