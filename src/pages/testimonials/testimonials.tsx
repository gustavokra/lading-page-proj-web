import Head from '../../assets/head1.png'
import Head2 from '../../assets/head2.png'
import TestimonialCard from '../../components/testimonial_card/testimonial_card'
import './testimonials.css'
export default function Testimonials() {
    return (
        <section id='testimonials'>
            <header>
                <span>
                    <p className="desktop-only">Conselho de quem conhece</p>
                    <h2>Cada cliente importa!</h2>
                </span>
                <p>Problems trying to resolve the conflict between
                    the two major realms of Classical physics: Newtonian mechanics </p>
            </header>
            <section className="carousel">
                <div className="carousel-content">
                    <TestimonialCard
                        rating={4}
                        imageUrl={Head2}
                        cargo='Ator'
                        name='Ryan'
                        testemunial='Slate helps you see  how many more days 
                            you need to work to 
                            reach your financial 
                            goal for the month 
                            and year.'/>
                    <TestimonialCard
                        rating={3}
                        imageUrl={Head}
                        cargo='CEO'
                        name='Teste'
                        testemunial='Slate helps you see how many more days
                            you need to work to
                            reach your financial
                            goal for the month
                            and year.'/>
                    <TestimonialCard
                        rating={4}
                        imageUrl={Head2}
                        cargo='Ator'
                        name='James Gosling'
                        testemunial='Slate helps you see  how many more days 
                            you need to work to 
                            reach your financial 
                            goal for the month 
                            and year.'/>
                    <TestimonialCard
                        rating={3}
                        imageUrl={Head}
                        cargo='CEO'
                        name='Teste'
                        testemunial='Slate helps you see how many more days
                            you need to work to
                            reach your financial
                            goal for the month
                            and year.'/>
                    <TestimonialCard
                        rating={4}
                        imageUrl={Head2}
                        cargo='Ator'
                        name='James Gosling'
                        testemunial='Slate helps you see  how many more days 
                            you need to work to 
                            reach your financial 
                            goal for the month 
                            and year.'/>
                </div>
            </section>
        </section>
    )
}