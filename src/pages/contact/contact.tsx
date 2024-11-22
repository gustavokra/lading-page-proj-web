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
                'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ5NzQwYTcwYjA5NzJkY2NmNzVmYTg4YmM1MjliZDE2YTMwNTczYmQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA4MDkxMjA5MTY1MTIwODY1NjI0IiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJna3JhZW1lckBtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJyb0JJcTBSRXh6amhqYjFuNFdDRlNBIiwibmJmIjoxNzMyMjk0Njk5LCJpYXQiOjE3MzIyOTQ5OTksImV4cCI6MTczMjI5ODU5OSwianRpIjoiZWE3NzQxOTc1ZWY1YjMxMTJkMTUzNjRjODRhZjY1NWI2MDk3YTYxMiJ9.TXsKRxCwOJzZCQbU4uawa5MXX1rcHPhpe_8Un0X9pPMgxmqZyUSYRTSPxW9xyrXochK_AMBbn3pvsoJpuFpl6puZwxGfGv_pQz5Bp0HB7nDd8ynrTlgFMJzs_mmbaB4pe5sJ72tz197YqqKRbpeqOH_y16SshAJGLyfWcBtrzVoSDrlGVF7VJNkQFq3lvB91BX6hBii_xSNhy089k_xOBTMcpAQ6DqFzDpUEYazsyppAFUCsYyf1f8Yg4h1dYeIYiEDk5R2qOjDr_VcvnJQsdGWPSHtcbLttKYLuBs1wOiANzWwZ0-v2k6pZCNO3iaW5IXsB5ZyMzm391P-hWOq65Q'
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
