import React from 'react'
import "./solution_card.css"

interface CardProps {
    imageUrl: string;
    altText: string;
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, altText }) => {
    return (
        <div className="card">
            <img src={imageUrl} alt={altText} width={64} height={64} />
            <h3>{title}</h3>
            <p>
                {description}
            </p>
        </div>
    )
}

export default Card;