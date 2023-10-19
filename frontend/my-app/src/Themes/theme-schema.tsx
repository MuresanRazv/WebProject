export interface ThemeSchema {
    colors: colors,
    fontSize: fontSize
}

interface colors {
    primary: string,
    secondary: string,
    text: string,
    background: string,
}

interface fontSize {
    small: string,
    medium: string,
    large: string,
}