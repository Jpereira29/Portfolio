import Image from "next/image";
import { Container } from "./styles";

type Props = {
    name: string
    icon: string
    techs: string[]
}

export function BoxLanguage({ name, icon, techs }: Props) {
    return (
        <Container>
            <div className="card">
                <div className="icon">
                    <i className={icon} id="icon-i" />
                </div>
                <div className="content">
                    <h3>{name}</h3>
                    <ul>
                        {techs.map((tech, index)=> (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </Container>
    )
}
