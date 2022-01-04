import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;

    justify-content: center;
    align-items: center;
`;

export const Text = styled.Text`
    font-family: ${({ theme }) => theme.fonts.clean};

    color: ${({ theme }) => theme.colors.primary};
`;