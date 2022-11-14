import styled from "styled-components";

export const Container = styled.div`
    background: #000;
    position: fixed;
    width: 100%;
    height: 60px;
    top: 0;
    z-index: 1000;
    margin-bottom: 60px;
    div {
        display: flex;
        margin: auto;
        padding-top: 1rem;
        color: white;
        height: 100%;
        max-width: 1020px;

        h1 {
            font-size: 25px;
            font-family: 'Rubik Bubbles', cursive;
            font-weight: 100;
            margin-left: 1rem;
        }
    }

    span {
        color: var(--gray-300);
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: auto;

        a {
            margin-right: 3rem;
            font-weight: bold;
            font-size: 15px;
            &:hover {
                filter: brightness(0.8);
                transition: filter 0.5s;
            }
        }
    }

    @media only screen and (max-width: 500px) {
        height: 40px;

        div {
            padding-top: 0.75rem;

            h1 {
                font-size: 20px;
            }
        }

        nav a {
            font-size: 12px;
        }
    }
`
