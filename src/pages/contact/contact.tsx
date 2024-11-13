import { useState } from "react";
import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"
import "../../styles/utility.css"
import "./contact.css"
export default function Contact() {

    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');
    const [emailSucess, setEmailSucess] = useState(false);

    const sendEmail = () => {
        fetch('/api/https://us-central1-projeto-arch-lambda-439723.cloudfunctions.net/function-1?' + "email=" + email + '&' + "content=" + content, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFkYzBmMTcyZThkNmVmMzgyZDZkM2EyMzFmNmMxOTdkZDY4Y2U1ZWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA4MDkxMjA5MTY1MTIwODY1NjI0IiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJna3JhZW1lckBtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJYeUlSS2pJdkFtUzN0TXVWR1pJNkZ3IiwibmJmIjoxNzMxNDU4MjM1LCJpYXQiOjE3MzE0NTg1MzUsImV4cCI6MTczMTQ2MjEzNSwianRpIjoiNTJmZDJhYTNhNTU3MmIyOTQzZGZiNGJmOGU2Mzc4ZDg5MmExNzdiMyJ9.kASWWe5Fw8un3HzG4ajTA0NhsErAz9aj4iPFgBeZ0azAIr5H5fVBfrNGsj6VA0Cw0-sz_O8hMkiZeqez9K_r0QvvNGNSLyP43eMnWqcVn2WBR68sJMh-Sr83vRlkFMj-Z7vUIOsi43P6n41ZT9VGdPGHtSYyUIh2KkC2pgcVdXnA9MO1IXghph7hzXT6gpLcNvIWPvz5LIc_NwMGY4y9hzZq8_8zFsDjT--fbxenR_XD2ajaGYykJHrNrYlRl8aMgQVtCAbGGpSuqjkd-PgCBsMIU9nFiL_cna_9eE2iBM_X5AR4MwZ17jQAwLRYJqvqfgtnDtLpu0Np2W_YBJVXWA'
            }
        })
            .then(response => response.text())
            .then(data => {
                console.log(data);
                setEmailSucess(true);
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
