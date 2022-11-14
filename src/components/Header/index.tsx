import Link from "next/link";
import { Container } from "./styles";

export function Header() {
    return (
        <Container>
            <div>
                <h1>Web <span>Developer</span></h1>
                <nav>
                    <Link href="/">Home</Link>
                    <Link  href="/Portfolio">Portfolio</Link>
                </nav>
            </div>
        </Container>
    )
}
