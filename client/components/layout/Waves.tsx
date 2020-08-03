import React, { FC } from 'react';
import styled from 'styled-components';

const WaveWrapper = styled.div`
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
`;

const WaveWrapperInner = styled.div`
    position: absolute;
    position: absolute;
    width: 100%;
    overflow: hidden;
    height: 100%;
    bottom: -1px;
    background-image: ${(props) =>
        `linear-gradient(to top, ${props.theme.colors.primary} 10%, ${props.theme.colors.secondary} 90%);`};
`;

const Top = styled(WaveWrapperInner)`
    z-index: 15;
    opacity: 0.5;
`;

const Middle = styled(WaveWrapperInner)`
    z-index: 10;
    opacity: 0.75;
`;

const Bottom = styled(WaveWrapperInner)`
    z-index: 5;
`;

const Wave = styled.div`
    position: absolute;
    left: 0;
    width: 200%;
    height: 100%;
    background-repeat: repeat no-repeat;
    background-position: 0 bottom;
    transform-origin: center bottom;
`;

const WaveTop = styled(Wave)`
    background-size: 50% 100px;
    animation: move-wave 3s;
    -webkit-animation: move-wave 3s;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
`;

const WaveMiddle = styled(Wave)`
    background-size: 50% 120px;
`;

const WaveBottom = styled(Wave)`
    background-size: 50% 100px;
`;

const Waves: FC = () => {
    return (
        <WaveWrapper>
            <Top>
                <WaveTop
                    style={{ backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-top.png')" }}
                ></WaveTop>
            </Top>
            <Middle>
                <WaveMiddle
                    style={{ backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-mid.png')" }}
                ></WaveMiddle>
            </Middle>
            <Bottom>
                <WaveBottom
                    style={{ backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-bot.png')" }}
                ></WaveBottom>
            </Bottom>
        </WaveWrapper>
    );
};

export { Waves };
