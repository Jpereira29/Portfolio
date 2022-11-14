import styled from "styled-components";

export const Container = styled.div`
    h2 {
        color: var(--gray-300);
        border-right: 2px solid rgba(255, 255, 255, 0.75);
        white-space: nowrap;
        overflow: hidden;
        font-family: 'Mochiy Pop One', sans-serif;
    }

    @keyframes typing {
        from {
            width: 0;
        }
        to {
            width: 100%;
        }
    }

    .typing-animation {
        animation: blinkCursor 500ms infinite normal, typing 3s 0s normal;
    }

    @keyframes blinkCursor {
        from {
            border-right-color:  2px solid rgba(255, 255, 255, 0.75);
        }

        to {
            border-right-color: transparent;
        }
    }
`
