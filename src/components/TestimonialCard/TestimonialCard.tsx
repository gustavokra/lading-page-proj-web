import Star from '../../assets/star.svg'
import StarEmpty from '../../assets/star_empty.svg'

interface ITestimonialProps {
    imageUrl: string;
    name: string;
    testemunial: string;
    cargo: string;
    rating: number;
}

export default function TestimonialCard(props: ITestimonialProps) {
    return (
        <div className="carousel-card">
            <span className='testimony'>
                <img src={props.imageUrl} alt="" />
                <p>{props.testemunial}</p>
            </span>
            <span className='rating'>
                {Array(props.rating).fill(1).map(() =>
                    <img src={Star} alt="ícone estrela" width={22} height={20} />
                )}
                {Array(5 - props.rating).fill(1).map(() =>
                    <img src={StarEmpty} alt="ícone estrela sem fundo" width={20} height={22} />
                )}
            </span>
            <span className='names'>
                <p>{props.name}</p>
                <p>{props.cargo}</p>
            </span>
        </div>
    )
}