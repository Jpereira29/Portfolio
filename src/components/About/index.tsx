import Image from "next/image";
import { AnimationText } from "../AnimationText";
import { SocialMedia } from "../SocialMedia";
import * as C  from "./styles";

export function About() {
    return (
        <C.Container>
            <C.Title>
                <h1>Jorge Pereira</h1>
                <AnimationText
                    text="Desenvolvedor Web" 
                />
                <hr />
            </C.Title>

            <C.Profile>
                <div>
                    <Image 
                        src="/images/Profile.png" 
                        alt="Profile" width={150} 
                        height={150} 
                    />
                    <div />
                </div>

                <p>Jorge Pereira de Oliveira é o que podemos denominar de Técnico. Sua forma de atuar combina exatidão e precisão com paciência para trabalhar em um projeto até que ele seja concluído. É interessado em produzir trabalhos de qualidade e frequentemente não mede esforços para que o resultado seja o melhor possível. Racional e calmo. Prefere não tomar decisões sozinho, e prefere não se manifestar em meio a um grupo.</p>
            </C.Profile>
            <div className="social">
                <SocialMedia />
            </div>
        </C.Container>
    )
}
