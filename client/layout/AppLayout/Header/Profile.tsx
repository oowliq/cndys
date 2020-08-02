import React, { FC, useState } from 'react';
import styled, { css } from 'styled-components';
import { ArrowDownIcon, LogoutIcon } from 'components/icons';
import { ClearButton } from 'components/buttons';
import ClickOutHandler from 'react-onclickout';
import { darken } from 'polished';
import posed from 'react-pose';

const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;

const ProfileImageWrapper = styled.div`
    border-radius: 20em;
    overflow: hidden;
    height: 40px;
    width: 40px;
    border: 2px solid ${(props) => props.theme.colors.primary};
    padding: 2px;
`;

const ProfileImageSource = styled.img`
    width: 40px;
    border-radius: 20em;
`;

const ProfileInfoWrapper = styled.div`
    margin-left: 0.5em;
`;

const ProfileUsername = styled.span`
    font-weight: ${(props) => props.theme.fontWeights.bold};
    letter-spacing: 1px;
    font-size: 18px;
`;

const ProfilePopupButton = styled(ClearButton)<{ reverse: boolean }>`
    margin-left: 0.5em;
    transition: all 0.2s ease;
    &:hover {
        cursor: pointer;
    }
    ${(props) =>
        props.reverse &&
        css`
            transform: rotate(180deg);
        `}
`;

const ProfilePopupWrapper = posed(styled.div`
    z-index: -10;
    position: absolute;
    top: calc(100% + 30px);
    background-color: ${(props) => props.theme.colors.main};
    min-width: 160px;
    padding: 0.5em;
    border-radius: 3px;
`)({
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: '-200%' },
});

const ProfilePopupItem = styled(ClearButton)`
    font-weight: ${(props) => props.theme.fontWeights.medium};
    letter-spacing: 0.5px;
    display: flex;
    border-radius: 3px;
    align-items: center;
    width: 100%;
    padding: 0.5em;

    &:hover {
        cursor: pointer;
        background: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.main};
        svg {
            fill: ${(props) => props.theme.colors.main};
        }
    }
    &:active {
        background: ${(props) => darken(0.1, props.theme.colors.primary)};
    }
`;

const ProfilePopupItemText = styled.span`
    margin-left: 1em;
`;

const Profile: FC = () => {
    const [popupShowed, setPopupShowed] = useState(false);

    const handleTogglePopup = (e: React.MouseEvent): void => {
        e.preventDefault();
        e.stopPropagation();
        setPopupShowed((showed) => !showed);
    };

    const handleClosePopup = () => {
        setPopupShowed(false);
    };

    return (
        <ClickOutHandler onClickOut={handleClosePopup}>
            <ProfileWrapper>
                <ProfileImageWrapper>
                    <ProfileImageSource src="https://www.iconspng.com/images/abstract-tux-avatar/abstract-tux-avatar.jpg" />
                </ProfileImageWrapper>
                <ProfileInfoWrapper>
                    <ProfileUsername>oowliq</ProfileUsername>
                </ProfileInfoWrapper>
                <ProfilePopupButton reverse={popupShowed} onClick={handleTogglePopup}>
                    <ArrowDownIcon size={15} />
                </ProfilePopupButton>

                <ProfilePopupWrapper pose={popupShowed ? 'open' : 'closed'}>
                    <ProfilePopupItem>
                        <LogoutIcon size={15} />
                        <ProfilePopupItemText>Logout</ProfilePopupItemText>
                    </ProfilePopupItem>
                </ProfilePopupWrapper>
            </ProfileWrapper>
        </ClickOutHandler>
    );
};

export { Profile };
