import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
// createTheme() được sử dụng để tạo một đối tượng theme 
// với các cấu hình như palette, typography, components,...
export let theme = createTheme({
    palette: {
        // palette định nghĩa các màu sắc được sử dụng trong ứng dụng, 
        // bao gồm màu chính (primary), màu phụ (secondary), màu lỗi (error), và màu chữ (text). 
        primary: {
            main: '#00f',
        },
        secondary: {
            light: '#EDF7FA',
            main: '#00A8CC',
        },
        error: {
            main: red.A400,
        },
        text: {
            primary: '#21243D',
        },
    },
    typography: {
        // typography định nghĩa các thuộc tính 
        //về kiểu chữ (font family, font size, font weight, line-height,...)    
        fontFamily: 'Heebo, sans-serif',
    },

    //style lại cho component Container
    components: {
        MuiContainer: {
            //styleOverrides cho phép bạn ghi đè hoặc thêm CSS styles cho một thành phần cụ thể.
            styleOverrides: {
                maxWidthSm: {
                    maxWidth: '680px',
                    '@media (min-width: 600px)': {
                        maxWidth: '680px',
                    },
                },
                maxWidthMd: {
                    maxWidth: '860px',
                    '@media (min-width: 900px)': {
                        maxWidth: '860px',
                    }
                }

            },
            defaultProps: {
                maxWidth: 'md',
            },
            variants: []
        },
        MuiLink: {
            defaultProps: {
                underline: 'none',
            },
            styleOverrides: {
                root: {
                    color: 'black',

                    '&:hover, &.active': {
                        color: '#FF6464',
                    },
                },
            },
        },
        MuiButton: {
            variants: [
                {
                    props: { variant: 'contained', color: 'primary' },
                    style: {
                        color: 'white',
                    },
                },
            ],
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    paddingInline: 2,
                },
            },
            variants: [
                {
                    props: { color: 'secondary' },
                    style: {
                        color: 'white',
                        backgroundColor: '#142850',
                        fontSize: 16,
                        fontWeight: 'bold',
                    },
                },
            ],
        },
    }
});

theme = responsiveFontSizes(theme)