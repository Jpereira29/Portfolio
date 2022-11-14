import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    padding-top: 100px;

    h2 {
        font-size: 20px;
        margin: 40px 0;
    }

    .project {
        font-size: 20px;
        margin-left: 3rem;
        font-family: 'Mochiy Pop One', sans-serif;
    }

    .text {
        max-width: 300px;
        text-align: right;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 2rem;
    }

    .content {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .content-projects {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 60px;
        gap: 60px;
    }

    .footer {
        width: 100%;
        height: 300px;
        margin-top: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #031137;
    }
`
