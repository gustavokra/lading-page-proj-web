import Link from "../../assets/link_icon.svg";
import Watch from "../../assets/watch_icon.svg";
import UserCheck from "../../assets/user_check_icon.svg";
import Card from "../../components/Card/Card";
import "./solution.css";
import "../../styles/utility.css";

export default function Solution() {
    return (
        <section id="solution">
            <div className="container content">
                <header>
                    <span>
                        <p className="desktop-only description">
                            Soluções
                        </p>
                        <h2>Sob medida para você!</h2>
                    </span>
                    <p>
                        Inovação é com a gente! A datasage já conquistou diversos clientes, seja você mais um deles, veja tudo que pode ganhar com nossos serviços.
                    </p>
                </header>
                <div className="layout">
                    <Card
                        imageUrl={Watch}
                        altText="Relógio"
                        title="Processos mais ágeis!"
                        description="Faça perguntas ou até mesmo peça ações para seu próprio chat e ganhe mais tempo!"
                    />
                    <Card
                        imageUrl={UserCheck}
                        altText="Usuário satisfeito"
                        title="Treinamento personalizado!"
                        description="Você tem um sistema ou um conjunto de informações e quer um chat personalizado para seu uso? Sem problemas!"
                    />
                    <Card
                        imageUrl={Link}
                        altText="Link"
                        title="Facilidade de integração!"
                        description="Você quer integrar processos? Sem problema! Nossa plataforma pode ser integrada com qualquer sistema!"
                    />
                </div>
            </div>
        </section>
    )
}