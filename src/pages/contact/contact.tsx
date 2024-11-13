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
        fetch('/api/?toMail=' + email + '&' + "content=" + content, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFkYzBmMTcyZThkNmVmMzgyZDZkM2EyMzFmNmMxOTdkZDY4Y2U1ZWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA4MDkxMjA5MTY1MTIwODY1NjI0IiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJna3JhZW1lckBtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiI3bGpDaGo5TVVPaHZUWUtmTHYwanp3IiwibmJmIjoxNzMxNTAzMzQ3LCJpYXQiOjE3MzE1MDM2NDcsImV4cCI6MTczMTUwNzI0NywianRpIjoiY2EyMGUyYmQ5YjVkNDI0N2NjNTVhYTAzYWYxYjRiNzgxNGM0MjUyMyJ9.ztV50bhNrZvgXMMrR-KninUZmckqk00XCHp84u4_VJ8LVcQUyzywb3HN6YcGDKJkG9zqDsOzsC0pu5lq6urmyEuYApRs4SLiadPwgN_KQ71xSma3mV6sIzY-AaPpKCWg1ogNdoBUGdvg2OxdnMgyCrW3kviejJb3UjIjgbUZLahyRpkOT6q0idyLLovZfAI8N3qVitKHBXe-EJ4QtPGKyXt4fGxD6mmvyvXeEOpvUw9Q7YKT2GsLmUqopy1iWZBJh1IRc2CSv3zQbfie36XO2PbLbm0XzIveMqI0pjxkuIgVPTX4dU36kHC-KBtqc2NFs7FnA8OTgllaekWbPeXvgg'
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
