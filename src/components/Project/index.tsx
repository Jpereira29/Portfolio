import { Project } from "../../Types/Project";
import { Container } from "./styles";

export function Project({ name, description, repository}: Project) {
    return (
        <Container>
                <div className="content2">
                    <div className="icon2">
                        <i className="devicon-devicon-plain" />
                    </div>
                    <div className="text2">
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <a href={repository} target="_blank" rel="noreferrer">Repositório</a>
                    </div>
                </div>
        </Container>
    )
}
