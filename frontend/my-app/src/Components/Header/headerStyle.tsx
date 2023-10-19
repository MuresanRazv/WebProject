import styled from 'styled-components'

export const Title = styled.h1`
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fontSize.medium};
`

export const HeaderButton = styled.li`
    color: ${props => props.theme.colors.secondary};
    font-size: ${props => props.theme.fontSize.small};
`

export const StyledHeader = styled.header`
    background-color: ${props => props.theme.colors.background}
`