export interface Theme {
    name: string
    properties: any
}

export const dark: Theme = {
    name: 'dark',
    properties: {
        "--text-primary": "#b6b6b6",
        "--text-secondary": "#ececec",
        "--bg-primary": "#2d2d3b",
        "--bg-secondary": "#18181d",
        "--content-bg-text-primary": "#0c0b0b",
        "--content-text-primary": "#ddd4d4",
    }
}

export const light: Theme = {
    name: 'light',
    properties: {
        "--text-primary": "#1f1f1f",
        "--text-secondary": "#000000",
        "--bg-primary": "#ffffff",
        "--bg-secondary": "#e4e4e4",
        "--content-bg-text-primary": "#f1f1f0",
        "--content-text-primary": "#232323",
    }
}

export const solar : Theme = {
    name: 'solar',
    properties: {
        "--text-primary": "#576e75",
        "--text-secondary": "#35535c",
        "--bg-primary": "#fdf6e3",
        "--bg-secondary": "#f5e5b8",
        "--content-bg-text-primary": "#ffffff",
        "--content-text-primary": "#232323",
    }
}