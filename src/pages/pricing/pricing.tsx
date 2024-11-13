import PrincingCard from "../../components/pricing_card/princing_card";
import "../../styles/utility.css"
import "./pricing.css"
export default function Pricing() {
    return (
        <div>
            <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Preços</p>
                    <h2>Nossos planos</h2>
                </header>
                <section className="even-columns gap-1">
                    <PrincingCard
                        headerTitle="Teste"
                        headerDescription="100 requisições por mês."
                        price="Grátis"
                        items={["Treinamento da sua documentação, até 10 mil caracteres", "Adicionar uma funcionalidade"]}
                    />
                    <PrincingCard
                        premium
                        premiumTitle="1º MÊS COM DESCONTO"
                        headerTitle="Premium"
                        headerDescription="Até 10 mil requisições por mês."
                        price="R$ 89,90"
                        priceDescription="/mês"
                        items={["Treinamento da sua documentação, até 40 mil caracteres", "Adicione quantas funções forem necessárias"]}
                    />
                    <PrincingCard
                        headerTitle="Intermediário"
                        headerDescription="5 mil requisições por mês."
                        price="R$ 50,00"
                        priceDescription="/mês"
                        items={["Treinamento da sua documentação, até 10 mil caracteres", "Adicione quantas funções forem necessárias"]}
                    />
                </section>
            </section>
        </div>
    )
}