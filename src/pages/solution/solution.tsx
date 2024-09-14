import Link from "../../assets/link_icon.svg";
import Watch from "../../assets/watch_icon.svg";
import UserCheck from "../../assets/user_check_icon.svg";
import "../../styles/solution.css";
import "../../styles/utility.css";

export default function Solution() {
    return (
        <section id="solution">
            <div className="container content">
                <p className="desktop-only description">
                    Soluções
                </p>
                <h2>Sob medida para você!</h2>
                <p>
                    Inovação é com a gente! A datasage já conquistou diversos clientes, seja você mais um deles, veja tudo que pode ganhar com nossos serviços.
                </p>
                <div className="layout">
                    <div className="card">
                        <img src={Watch} alt="Relógio" width={64} height={64} />

                        <h3>Processos mais ágeis!</h3>
                        <p>
                            Faça perguntas ou até mesmo peça ações para seu próprio chat!
                        </p>
                    </div>
                    <div className="card">
                        <img src={UserCheck} alt="Usuário" width={64} height={64} />
                        <h3>Treinamento personalizado!</h3>
                        <p>
                            Você tem um sistema ou um conjunto de informações e quer um chat personalizado para seu uso? Sem problemas!
                        </p>
                    </div>
                    <div className="card">
                        <img src={Link} alt="Link" width={64} height={64} />
                        <h3>Facilidade de integração!</h3>
                        <p>
                            Você quer integrar processos? Sem problema! Nossa plataforma pode ser integrada com qualquer sistema!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}