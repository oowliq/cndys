import React, { FC } from 'react';
import styled from 'styled-components';
import { ClearButton } from 'components/buttons';
import { ArrowDownIcon } from 'components/icons';

interface PaginationProps {
    currentPage: number;
    maxPage: number;
    onChangePage: (page: number) => void;
}

const PaginationWrapper = styled.div`
    margin-top: 1em;
`;

const PageButton = styled(ClearButton)`
    background: ${(props) => props.theme.colors.primary};
    width: 30px;
    height: 30px;
    border-radius: 3px;
    color: ${(props) => props.theme.colors.main};
`;

const ChangePageButton = styled(ClearButton)``;

const LeftChangePageButton = styled(ChangePageButton)`
    transform: rotate(90deg);
    margin-right: 1em;
`;

const RightChangePageButton = styled(ChangePageButton)`
    transform: rotate(270deg);
    margin-left: 1em;
`;

const Pagination: FC<PaginationProps> = ({ currentPage, maxPage, onChangePage }) => {
    const isMinPage = currentPage === 1;

    const isMaxPage = currentPage === maxPage;

    const handleMinus = () => onChangePage(currentPage - 1);

    const handlePlus = () => onChangePage(currentPage + 1);

    return (
        <PaginationWrapper>
            <LeftChangePageButton onClick={handleMinus} disabled={isMinPage}>
                <ArrowDownIcon size={20} />
            </LeftChangePageButton>
            <PageButton>{currentPage}</PageButton>
            <RightChangePageButton onClick={handlePlus} disabled={isMaxPage}>
                <ArrowDownIcon size={20} />
            </RightChangePageButton>
        </PaginationWrapper>
    );
};

export { Pagination };
