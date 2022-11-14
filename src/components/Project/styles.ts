import styled from "styled-components";

export const Container = styled.div`    
    position: relative;
    width: 300px;
    height: 350px;
    background: #2E2E2E;
    display: flex;
    justify-content: center;
    align-items: center;

    ::before {
        content: '';
        position: absolute;
        inset: -10px 50px;
        border-top: 4px solid var(--blue-200);
        border-bottom: 4px solid var(--blue-200);
        z-index: -1;
        transform: skewY(15deg);
        transition: 0.5s ease-in-out;
    }

    &:hover::before {
        transform: skewY(0deg);
    }

    ::after {
        content: '';
        position: absolute;
        inset: 60px -10px;
        border-left: 4px solid var(--blue-200);
        border-right: 4px solid var(--blue-200);
        z-index: -1;
        transform: skewX(15deg);
        transition: 0.5s ease-in-out;
    }

    &:hover::after {
        transform: skewX(0deg);
        inset: 40px -10px;
    }

    
    &:hover .content2 .text2 h3 {
        color: #2E2E2E;
    }

    &:hover .content2 .text2 p {
        color: #2E2E2E;
    }

    &:hover .content2 .text2 a {
        background: #2E2E2E;
        color: var(--blue-200);
    }

    .content2 {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        gap: 20px;
        padding: 0 20px;
        width: 100%;
        height: 100%;
        overflow: hidden;

        &:hover .icon2 {
            background: var(--blue-200);
            box-shadow: 0 0 0 4px #2E2E2E,
            0 0 0 300px var(--blue-200);
        }

            
        .icon2 {
            width: 80px;
            height: 80px;
            box-shadow: 0 0 0 4px #2E2E2E,
            0 0 0 6px var(--blue-200);
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2.5em;
            background: #2E2E2E;
            transition: 0.5s ease-in-out;
        }

        .text2 {
            h3 {
                font-size: 1.5em;
                color: #FFF;
                font-weight: 500;
                transition: 0.5s ease-in-out;
            }

            p {
                color: #999;
                transition: 0.5s ease-in-out;
            }

            a {
                position: relative;
                background: var(--blue-200);
                color: #2E2E2E;
                padding: 8px 15px;
                display: inline-block;
                text-decoration: none;
                font-weight: 10px;
                margin-top: 10px;
                transition: 0.5s ease-in-out;
                font-weight: bold;
                border-radius: 5px;
            }
        }
    }
`
