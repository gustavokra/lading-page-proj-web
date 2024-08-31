import HeroRectangleOne from "../../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../../assets/images/rectangleTwo.png";
import Button from "../../components/Button";
import "../../styles/hero.css";
import "../../styles/utility.css";

export default function Hero() {
    return (
        <section id="hero">
            <span className="desktop-only">
                <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
            </span>
            <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />
            <div className="container content">
                <p className="desktop-only">
                    Olá
                </p>
                <h1>Uma solução que irá te ajudar a manter o foco em suas atividades!</h1>
                <p>Já pensou em conseguir aumentar seu foco e organização, conseguindo melhores resultados no seu trabalho, utilizando métodos
                </p>
                <div className="flex gap-1">
                    <span><Button text="Cadastre-se" /></span>
                    <span className="desktop-only">
                        <Button text="Veja mais" secondary />
                    </span>
                </div>
            </div>
        </section>
    )
}