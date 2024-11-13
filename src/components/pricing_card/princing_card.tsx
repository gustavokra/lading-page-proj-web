import CheckIcon from "../../assets/check_icon.svg";
import Button from "../../components/button/button";
import "./pricing_card.css"

interface IPricingCardProps {
    headerTitle: string;
    headerDescription: string;
    price: string;
    priceDescription?: string;
    items: string[];
    premium?: boolean;
    premiumTitle?: string;
}

export default function PrincingCard({ headerTitle, headerDescription, price, items, premium, premiumTitle, priceDescription }: IPricingCardProps) {

    return (
        <div className={premium ? "pricing-card premium" : "pricing-card"}>
            {premium ?
                <span className="bonus">
                    <p>{premiumTitle}</p>
                </span>
                : <></>}
            <span className="plan">
                <h3>{headerTitle}</h3>
                <p>{headerDescription}</p>
            </span>
            <span className="price">
                <h2>{price}</h2>
                {priceDescription
                    ? <p>{priceDescription}</p>
                    : <></>}
            </span>
            <Button text="Pedir agora" secondary={premium ? false : true} key="free" />
            <span className="hr" />
            {items.map(item => (
                <div key={Math.random()}>
                    <span className="features">
                        <img src={CheckIcon} alt="ícone check" width={24} height={24} />
                        <p>{item}</p>
                    </span>
                </div>
            ))}
        </div>
    )
}
