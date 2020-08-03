import styled from 'styled-components';

const Container = styled.div`
    margin: 0 auto;
    max-width: ${(props) => props.theme.container.width};
    padding: 0 1em;
`;

export { Container };
