import { useState } from "react";
import Button from "../../components/button/button"
import Input from "../../components/input/Input"
import "../../styles/utility.css"
import "./contact.css"
export default function Contact() {

    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');
    const [emailSucess, setEmailSucess] = useState(false);

    const sendEmail = () => {
        fetch('/api/?toMail=' + email + '&' + "content=" + content, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer '
            }
        })
            .then(response => {
                console.log(response.status)
                console.log(response.text())

                if(response.status === 200) {
                    setEmailSucess(true);
                }
            })
            .catch(error => console.error('Erro:', error));
    }

    return (
        <section id="contact" className="container gap-1.5">
            <header>
                <span>
                    <p className="desktop-only">Envie sua dúvida</p>
                    <h2>Entre em contato</h2>
                </span>
                <p>Entre em contato, estamos dispostos a tirar qualquer dúvida, seja um orçamento, uma dúvida técnica de algum de nossos produtos. Estamos à disposição para responder.</p>
            </header>
            <section className="user-input gap-1">
                <Input placeholder="Seu melhor Email" type="email" value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                <Input
                    type="text"
                    placeholder="Motivo. Ex: quero um orçamento"
                    className="responsive-placeholder"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContent(e.target.value)} />

                {emailSucess ? <p>Email foi enviado com sucesso!</p> : <></>}
                <span className="action">
                    <Button text="Enviar" onClick={sendEmail}></Button>
                </span>
            </section>
        </section>
    )
}
