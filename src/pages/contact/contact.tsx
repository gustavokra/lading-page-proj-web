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
                'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFkYzBmMTcyZThkNmVmMzgyZDZkM2EyMzFmNmMxOTdkZDY4Y2U1ZWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA4MDkxMjA5MTY1MTIwODY1NjI0IiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJna3JhZW1lckBtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJhcDdEMkROQ2hnblVzYWc5cDRUajNBIiwibmJmIjoxNzMxNDU0Njk0LCJpYXQiOjE3MzE0NTQ5OTQsImV4cCI6MTczMTQ1ODU5NCwianRpIjoiNzA4NzRmOTlkYzMyMDcyYWRjYTdmZmNjZGQ3ODRmNGVjYTIwOTNmNSJ9.IEoFuQ1TLSES_RhnTNChcpzy1Qx5KcRwlTG7N80wPD962wPlykamkwvLYuK6dNbRp766ndfkR5ZuC15Nk8V16kXehECQcRKgup6YRGXI6pG-HNb9ByE2U49MoNGVcfETdr1bGjfctJwlRm9sEu-w5eGu-f0hMcEG2S6Vh4ne4RI66lE0tN0PcRdY09Vz3crZE6KtI572GDY0kvMry9LtVfFZRx5dbSHSHzf03b52gOW0pcjbNzOMbQ9SPLYJlzQEEktxMVFeBxqxehQdxUtKFSJ2MI5-MNJX9iQ3RNPzGc-EHBO0l15dcoN1SpnPJPoxNCMKY2ShZboMzQEq-QZPAw'
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
