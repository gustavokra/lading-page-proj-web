import Button from "../../components/Button/Button";
import "../../styles/utility.css"
import CheckIcon from "../../assets/check_icon.svg";
import "./Pricing.css"
export default function Pricing() {
    return (
        <div>
            <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Preços</p>
                    <h2>Nossos planos</h2>
                </header>
                <section className="even-columns gap-1">
                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Teste</h3>
                            <p>100 requisições por mês.</p>
                        </span>
                        <span className="price">
                            <h2>Grátis</h2>
                        </span>
                        <Button text="Pedir agora" secondary key="free" />
                        <span className="hr" /><span className="features">
                            <img src={CheckIcon} alt="ícone check" width={24} height={24} />
                            <p>Treinamento da sua documentação, até 10 mil caracteres</p>
                        </span>
                        <ul className="features">
                                <img src={CheckIcon} alt="ícone check" width={24} height={24} />
                                <p>Adicionar uma funcionalidade</p>
                        </ul>
                    </div>
                    <div className="pricing-card premium">
                        <span className="bonus">
                            <p>1º MÊS COM DESCONTO</p>
                        </span>
                        <span className="plan">
                            <h3>Premium</h3>
                            <p>Até 10 mil requisições</p>
                        </span>
                        <span className="price">
                            <h2>R$ 89,90</h2>
                            <p>/mês</p>
                        </span>
                        <Button text="Pedir agora" key="premium"/>
                        <span className="hr" />
                        <span className="features">
                            <img src={CheckIcon} alt="ícone check" width={24} height={24} />
                            <p>Treine seu chat ilimitadamente</p>
                        </span>
                        <span className="features">
                            <img src={CheckIcon} alt="ícone check" width={24} height={24} />
                            <p>Adicione quantas funções forem necessárias</p>
                        </span>
                    </div>
                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Intermediário</h3>
                            <p>5 mil requisições por mês.</p>
                        </span>
                        <span className="price">
                            <h2>R$ 50,00</h2>
                            <p>/mês</p>
                        </span>
                        <Button text="Pedir agora" secondary key="free"/>
                        <span className="hr" /><span className="features">
                        </span>
                        <span className="features">
                            <img src={CheckIcon} alt="ícone check" width={24} height={24} />
                            <p>Treine seu chat ilimitadamente</p>
                        </span>
                        <span className="features">
                            <img src={CheckIcon} alt="ícone check" width={24} height={24} />
                            <p>Adicione quantas funções forem necessárias</p>
                        </span>
                    </div>
                </section>
            </section>
        </div>
    )
}