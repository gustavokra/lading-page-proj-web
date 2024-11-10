import HeroRectangleOne from "../../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../../assets/images/rectangleTwo.png";
import Button from "../../components/Button/Button";
import "./hero.css";
import "../../styles/utility.css";

export default function Hero() {
    return (
        <section id="hero">
            <span className="desktop-only header-adjust">
                <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
            </span>
            <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />
            <div className="container content">
                <p className="desktop-only">
                    Olá
                </p>
                <h1>Chat Bot IA personalizável e de fácil integração para seu sistema!</h1>
                <p>
                    Já pensou em possuir um chat bot que axilie novos clientes e funcionários e reduza tempo gasto com atendimentos e treinamentos?
                </p>
                <div className="flex gap-1">
                    <span><Button text="Cadastre-se" func={() => console.log("teste1")} /></span>
                    <span className="desktop-only">
                        <Button text="Veja mais" func={() => console.log("teste1")} secondary />
                    </span>
                </div>
            </div>
        </section>
    )
}