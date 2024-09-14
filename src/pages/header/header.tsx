import { useEffect, useState } from 'react'
import Logo from "../../assets/logo_icon.svg";
import Close from "../../assets/close_icon.svg";
import Menu from "../../assets/menu_icon.svg";
import Button from "../../components/Button";
import "../../styles/header.css";
import "../../styles/utility.css";

export default function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    useEffect(() => {
        const atribute = showMobileMenu ? "hidden" : "visible"

        document.documentElement.style.overflowY = atribute
    }, [showMobileMenu])
    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo Datasage" width={220} height={80} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#hero">Home</a>
                            </li>
                            <li>
                                <a href="#solution">Soluções</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricing">Preços</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>
                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>
                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a href="#hero" onClick={() => setShowMobileMenu(!showMobileMenu)}>Home</a>
                                        </li>
                                        <li>
                                            <a href="#solution" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                                Soluções</a>
                                        </li>
                                        <li>
                                            <a href="#testimonials" onClick={() => setShowMobileMenu(!showMobileMenu)}>Depoimentos</a>
                                        </li>
                                        <li>
                                            <a href="#pricing" onClick={() => setShowMobileMenu(!showMobileMenu)}>Preços</a>
                                        </li>
                                        <li>
                                            <a href="#contact" onClick={() => setShowMobileMenu(!showMobileMenu)}>Contato</a>
                                        </li>
                                        <li>
                                            <a className="reverse-color" href="#" onClick={() => setShowMobileMenu(!showMobileMenu)}>Login</a>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>
                </nav>
            </header>
        </>
    )
}