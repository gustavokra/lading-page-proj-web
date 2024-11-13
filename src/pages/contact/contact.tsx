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
                'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFkYzBmMTcyZThkNmVmMzgyZDZkM2EyMzFmNmMxOTdkZDY4Y2U1ZWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA4MDkxMjA5MTY1MTIwODY1NjI0IiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJna3JhZW1lckBtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJvNFVJcWt5ZkQwOWNEaVdIMEw3Z0dRIiwibmJmIjoxNzMxNTA5NzE3LCJpYXQiOjE3MzE1MTAwMTcsImV4cCI6MTczMTUxMzYxNywianRpIjoiMDY2ZjJlZTVjOGEwYTdlMmIzMmJkZDVkMGMzNjg3MjMzYjYyYzJjOSJ9.NpF0TgFKjfO58MNDB5T0s7SRIfD7QJ4os48rxTJ8EPCXOpgl-mrut9gW_ffqiYWq8xADD7oWGI07PZCiDLu6opX2wzoGxaxn0LgV3hXSdusRY0wIiowak3lmOLitPMmBfa9GaSNodYgRfdT6--izAJ3_TVSXch4Ouvnu7DGxLOp26KhT8W-uamKAFYhzCm9RgNK0-XwqggvBL_MckPmu5Vcub0q64BTTsDSVgcSJYdzzUfk-l6HNLcPwR6qlp6sXsqC4KI3OkD9pCwnNHZrEsrwXc_xxmfqOlyJCqTam5eu4sXhXkBeMvuTR2j_TaYm-v98ZbAlJlM5MM5buI7C2cg'
            }
        })
            .then(response => {
                console.log(response.status)
                console.log(response.text)
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
