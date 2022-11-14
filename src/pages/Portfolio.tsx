import { AnimationText } from "../components/AnimationText";
import { BoxLanguage } from "../components/BoxLanguage";
import { Project } from "../components/Project";
import { SocialMedia } from "../components/SocialMedia";
import { projects } from "../Data/Projects";
import { techs } from "../Data/Techs";
import { Container } from "../styles/Portfolio";

export default function Portfolio() {
    return (
        <Container>
            <div className="text">
                <AnimationText 
                    text="Meus conhecimentos"
                />
            </div>

            <div className="content">
                {techs.map((tech, index)=> (
                    <BoxLanguage
                        key={index}
                        name={tech.name}
                        icon={tech.icon}
                        techs={tech.techs}
                    />
                ))}
            </div>

            <h2 className="project">Projetos</h2>
            
            <div className="content-projects">
                {projects.map((project, index)=> (
                    <Project 
                        key={index}
                        name={project.name}
                        description={project.description}
                        repository={project.repository}
                    />
                ))}
            </div>

            <div className="footer">
                <SocialMedia />
            </div>
        </Container>
    )
}
