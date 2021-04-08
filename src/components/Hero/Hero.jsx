
import './Hero.css'
export default function Hero() {

    return (
        <div className="heroContainer">
            <div className="heroContainer__imageContainer">
                <img className="heroContainer__image" src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1531&q=80" alt="tutti-frutti-hero-pic" />
            </div>

            <section className="heroTextContainer">
                <h1 className="heroTextContainer__brandName">Tutti-Frutti</h1>
                <h3>Sustainable fresh products all year long!</h3>
                <h4>Dont choose between quality and price, Tutti Frutti offers all year fresh products while respecting producers and protecting mother earth!</h4>
            </section>
        </div>
    );
}
