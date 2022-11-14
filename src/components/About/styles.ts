import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin-top: 8rem;
    padding: 0 6rem;
    height: 340px;

    .social {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: 0;
        margin-bottom: 2rem;
    }

    @media only screen and (max-width: 650px) {
        padding: 0 1rem;
    }
`
export const Title = styled.div`
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 1rem;

    hr {
        border-color: var(--orange-200);
        height: 5px;
    }

    @media only screen and (max-width: 800px) {
        position: absolute;
        margin-top: 80px;
        top: 0;
    }
`
export const Profile = styled.div`
    display: flex;
    align-items: center;
    max-width: 500px;
    margin-left: auto;
    color: var(--gray-300);

    div {
        width: 160px;
        height: 160px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            border-radius: 50%;
            position: absolute;
            z-index: 1;
        }

        div {
            width: 160px;
            height: 160px;
            position: relative;
            border-radius: 50%;
            background: linear-gradient(25deg, #1e9000, #fff200, #ff0000);
            animation: animate 3s linear infinite;
        }

        @keyframes animate {
            0% {
                filter: hue-rotate(0deg) brightness(100%) blur(3px);
            }
            100% {
                filter: hue-rotate(360deg) brightness(100%) blur(3px);
            }
        }     
    }

    p {
        text-align: justify;
        font-size: 12px;
        font-family: 'Mochiy Pop One', sans-serif;
        letter-spacing: 0.3px;
        margin-left: 1.2rem;
    }

    
    @media only screen and (max-width: 450px) {
        flex-direction: column;
        margin-top: 3rem;

        p {
            margin: 1rem 0;
        }
    }
`
