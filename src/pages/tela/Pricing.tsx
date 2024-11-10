import Button from "../../components/Button/Button";
import "../../styles/utility.css"
import CheckIcon from "../../assets/check_icon.svg";
import "./Pricing.css"
import { useState } from "react";
export default function PlanSection() {

    const [email, setEmail] = useState();


    const teste = () => console.log("Teste1");

    function testeHttp() {
        fetch('https://economia.awesomeapi.com.br/json/last/USD')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Erro:', error));
    }

    function testeAuth() {
        fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          
          username: 'emilys',
          password: 'emilyspass',
          expiresInMins: 30,
        }),
      })
      .then(res => res.json())
      .then(console.log);
    }

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
                        <h2>Grátis</h2>
                        <Button text="Pedir agora" secondary key="free" func={teste} />
                        <span className="hr" /><span className="features">
                            <img src={CheckIcon} alt="ícone check" width={24} height={24} />
                            <p>Treinamento da sua documentação, até 10 mil caracteres</p>
                        </span>
                        <ul className="features">
                            <li>
                                <img src={CheckIcon} alt="ícone check" width={24} height={24} />
                                <p>Adicionar uma funcionalidade</p>
                            </li>
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
                        <Button text="Pedir agora" key="premium" func={teste} />
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
                        <Button text="Pedir agora" secondary key="free" func={teste} />
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

            <section id="#contact">

                <input></input>
                <Button text="teste" func={() => testeHttp()}></Button>
                <Button text="Teste auth" func={() => testeAuth()}></Button>
            </section>
        </div>
    )
}