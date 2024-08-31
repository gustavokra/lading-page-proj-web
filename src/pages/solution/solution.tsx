import Award from "../../assets/award_icon.svg";
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
                {/* <p>Já pensou em conseguir aumentar seu foco e organização, conseguindo melhores resultados no seu trabalho, utilizando métodos
                </p> */}
                <p>
                    Inovação é com a gente! A nome empresa já conquistou diversos clientes, seja você mais um deles, veja tudo que pode ganhar com nossos serviços.
                </p>
                <div className="flex gap-1 ">
                    <div className="card">
                        <img src={Award} alt="Medalha" width={64} height={64} />
                        <h3>Sob medida para você!</h3>
                        <p>
                            Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage.
                        </p>
                    </div>
                    <div className="card">
                        <img src={Award} alt="Medalha" width={64} height={64} />
                        <h3>Sob medida para você!</h3>
                        <p>
                            Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage.
                        </p>
                    </div>
                    <div className="card">
                        <img src={Award} alt="Medalha" width={64} height={64} />
                        <h3>Sob medida para você!</h3>
                        <p>
                            Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}