import Logo from "../../assets/logo_icon.svg";
import FacebookIcon from "../../assets/facebook_icon.png";
import InstagramIcon from "../../assets/instagram_icon.png";
import YoutubeIcon from "../../assets/youtube_icon.png";
import "./footer.css"

export default function Footer() {

    return (
        <footer id="footer" >
            <div className="container flex links">
                <div>
                    <div>
                        <img src={Logo} alt="Logo Datasage" width={220} height={80} />
                    </div>
                    <div className="px-icons flex gap-1.5">
                        <img src={InstagramIcon} alt="Ícone do Instagram" width={24} height={24} />
                        <img src={FacebookIcon} alt="Ícone do Facebook" width={24} height={24} />
                        <img src={YoutubeIcon} alt="Ícone do youtube" width={24} height={24} />
                    </div>
                </div>
                <div>
                    <div className="py-base">
                        <h3>Empresa</h3>
                    </div>
                    <div className="flex gap-1">
                        <ul>
                            <li><a>Sobre nós</a></li>
                            <li><a>Faça parte do time</a></li>
                            <li><a>Blog</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="py-base">
                        <h3>Funcionalidades</h3>
                    </div>
                    <ul>
                        <li><a>Marketing</a></li>
                        <li><a>Análise de dados</a></li>
                        <li><a>Boot discord</a></li>
                    </ul>
                </div>
                <div>
                    <div className="py-base">
                        <h3>Recursos</h3>
                    </div>
                    <ul>
                        <li><a>Teste a Demo</a></li>
                        <li><a>Clientes</a></li>
                        <li><a>API</a></li>
                    </ul>
                </div>
            </div>
            <footer className="footer">
                <p>Projeto programação web - 2024 - Gustavo Kraemer</p>
            </footer>
        </footer>
    )
}