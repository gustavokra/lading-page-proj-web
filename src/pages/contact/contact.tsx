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
                'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ5NzQwYTcwYjA5NzJkY2NmNzVmYTg4YmM1MjliZDE2YTMwNTczYmQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA4MDkxMjA5MTY1MTIwODY1NjI0IiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJna3JhZW1lckBtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJIT2toenFzZG1td3gwdHBpT3h2MUp3IiwibmJmIjoxNzMyMzEzMjMwLCJpYXQiOjE3MzIzMTM1MzAsImV4cCI6MTczMjMxNzEzMCwianRpIjoiMGFlOWEzMDI1NGMyOTYzY2U0N2U5ZjZiODE5Y2VkY2UxM2E4ZDAzZCJ9.j7LujQiOIaoJTQTJAYYXmhudcnHDfTrhsiq1gVjTShW0oVBSYqiw5EkXQYVJmNw46vgRjNZEPk0lGQ_J029uvfbI5fwRmsUwvjYrE0xzslLyvM4SfEPyCjn4sCuDf6Yzq6ftSlPCBvQZjNmJoiLtDGGhgVYJy4DNnITDLZz1FTZKMStcRB1SoVHNTAAEUFJKMrcEtBjB8Rz_ELxCyaJutviMN33LC4ZaBapT8c_4OR8rve-x3WsyEZyZXXEdZ2hi_6SOrYy3MVlDB0mpHnxYUsJrGGEZS5SeomOUz9Zwv_FH0zZk3ySCX2Ri_gZtqKwhlLhmmG4oAtAGS1mPykH5hQ'
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
