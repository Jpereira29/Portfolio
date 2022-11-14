import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
   padding: 40px;

   .card {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        width: 240px;
        height: 300px;
        margin: 30px;
        padding: 2px;
        background: #287BFF;
        border-radius: 20px;
        border-bottom-left-radius: 160px;
        border-bottom-right-radius: 160px;
        box-shadow: 0 15px 0 #FFF,
        inset 0 -15px 0 rgba(255, 255, 255, 0.25),
        0 45px 0 rgba(0, 0, 0, 0.15);
        overflow: hidden;

        ::before {
            content: '';
            position: absolute;
            top: -140px;
            left: -40%;
            width: 100%;
            height: 120%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2));
            transform: rotate(35deg);
            pointer-events: none;
            filter: blur(5px);
        }
/*
        :nth-child(2) {
            background: linear-gradient(to bottom, #ff2ae0, #645BF6);
        }
        :nth-child(2) {
            background: linear-gradient(to bottom, #ffEC61, #F321D7);
        }
        */
        :nth-child(1) {
            background: linear-gradient(to bottom, #24FF72, #9A4EFF);
        }

        .icon {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: var(--background);
            box-shadow: 0 10px 0 rgba(0, 0, 0, 0.1),
            inset 0 -6px 0 #FFF;
            z-index: 100;

            #icon-i {
                position: relative;
                font-size: 2.3rem;
            }
        }
   }

   .content {
        font-family: 'Gloria Hallelujah', cursive;
        height: 100%;
        display: flex;
        align-items: center;

        h3 {
            position: absolute;
            top: 85px;
        }
   }
`
