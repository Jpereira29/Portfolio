import { Container } from "./styles";

type Props = {
    text: string
}
export function AnimationText({ text }: Props) {
    return (
        <Container>
            <h2 className="typing-animation">{text}</h2>
        </Container>
    )
}
