import * as C from "./styles";

export function SocialMedia() {
    return (
        <C.Container>
            <C.Content>
                <hr />
                <h3>CONTATOS</h3>
                <ul>
                    <a href="https://www.linkedin.com/in/jorge-pereira29/" target="_blank" rel="noreferrer">
                        <i className="fa fa-linkedin" aria-hidden="true" />
                    </a>

                    <a href="https://www.instagram.com/__jorgepereira/" target="_blank" rel="noreferrer">
                        <i className="fa fa-instagram" aria-hidden="true" />
                    </a>
                    <a href="https://github.com/Jpereira29" target="_blank" rel="noreferrer">
                        <i className="fa fa-github" aria-hidden="true" />
                    </a>
                    <a href="mailto:jorgepereira29ele@gmail.com" target="_blank" rel="noreferrer">
                        <i className="fa fa-envelope-o" aria-hidden="true" />
                    </a>
                </ul>
            </C.Content>
        </C.Container>
    )
}
