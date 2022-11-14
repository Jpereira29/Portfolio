import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 8rem;
    max-width: 80%;
`

export const Content = styled.div`
    margin-left: auto;
    position: relative;    

    hr {
        width: 100%;
        height: 5px;
    }

    ul {
        position: relative;
        display: flex;
        gap: 40px;
        margin-top: 1rem;

        a {
            border-radius: 5px;
            position: relative;
            list-style: none;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #ffffff10;
            box-shadow: 0 15px 35px rgba(0,0,0,0.1);
            cursor: pointer;

            .fa {
                font-size: 2em;
                -webkit-text-stroke: 0.3px #FFF;
                color: transparent;
            }

            ::before {
                border-radius: 5px;
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 0;
                overflow: hidden;
                border-bottom: 4px solid #FFF;
                transition: 0.5s ease-in-out;
                font-family: fontAwesome;
                text-align: center;
                line-height: 40px;
                font-size: 2em;
                color: #FFF;
            }

            &:hover::before {
                height: 100%;
            }

            :nth-child(1)::before {
                content: '\f0e1 ';
                
            }

            :nth-child(2)::before {
                content: '\f16d ';
                
            }

            :nth-child(3)::before {
                content: '\f09b ';
                
            }

            :nth-child(4)::before {
                content: '\f003';
                
            }
        }
    }

    @media only screen and (max-width: 450px) {
        position: relative;
    }

`
