import { useState } from "react";
import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"
import "../../styles/utility.css"
import "./Contatct.css"
export default function Contact() {

    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');

    const sendEmail = () => {
        console.log('https://us-central1-projeto-arch-lambda-439723.cloudfunctions.net/function-1?' + "email=" + email + '&' + "content=" + content);
        fetch('/api/https://us-central1-projeto-arch-lambda-439723.cloudfunctions.net/function-1?' + "email=" + email + '&' + "content=" + content, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFkYzBmMTcyZThkNmVmMzgyZDZkM2EyMzFmNmMxOTdkZDY4Y2U1ZWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA4MDkxMjA5MTY1MTIwODY1NjI0IiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJna3JhZW1lckBtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiI2YkVMQVdoTnRGUDRQc0ZxYnlaeXNBIiwibmJmIjoxNzMxNDM0NDEyLCJpYXQiOjE3MzE0MzQ3MTIsImV4cCI6MTczMTQzODMxMiwianRpIjoiYTFkNWYxN2U4ZGU0MDMzZmQ0YWNmYWE3ZjQ4YzE5YjkxYzM1MDYwOCJ9.ODUDbXI8eH2AmcOYoCYwY30TjYVIxuKr2tpks2OVpC3GzdwKcC6PsHHApHKtjwejUTzM_Poh5YP5wW6cysIqM10S4NiTFZgMfCQQ6_FxbYWKuf68ToOv_-68GILbFSdsvkmRlQHz1VKYY5wyq4MTr8q9gVDSRKGZYOlZiW8vIjMvEg9t4rZ1OeEv94ypiGf8zYPrV-KMX03ctqgh_JKaBCGohslVt-wnlbAJ1OKOZQJmnf8YFea972ykx9O_PNnzViHfN4rKuBEuT-6Ks5p81LenpfU5dk0UMsII7aYT2pQ1oyzNCnJPeaHK0IN601LaWj_xGpEmUsQT4-kje9X-yg'
            }
        })
            .then(response => response.text())
            .then(data => console.log('E-mail enviado com sucesso'))
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
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setEmail(e.target.value)
                        console.log(email)
                    }} />
                <Input placeholder="Motivo do contato. Ex: Gostei muito do produto X, poderia me enviar um orçamento?" type="text"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setContent(e.target.value)
                        console.log(content)
                    }} />
                <span className="action">
                    <Button text="Enviar" onClick={sendEmail}></Button>
                </span>
            </section>
        </section>
    )
}
