import { useReducer } from 'react'
import { ScopedCssBaseline, CssBaseline, Box, Button } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material'

let theme = createTheme ({
    typography: {
        frontWeightBold: 900,
        body1: {
            fontFamily: "Verdana",
            fontSize: "1.5rem",
            letterSpacing: 10,
            color: "green",
        },

    },
    palette: {
        mode: 'light',
    },
})
theme = createTheme(theme, {
    palette: {
        background: {
            default: theme.palette.mode === 'dark' ? 'purple' :'orange',
        },
    },
})

const boxStyles = {
    color: '#FFF',
    bgcolor: '#000',
    height: '100px',
    widht: '100px',
    border: '2px solid #FFF',
    padding: '16px',
}

export function CssBaseLineCustomization(){
    const [show, toggleShow ] = useReducer((s) => !s, false)
    return ( 
        <ThemeProvider theme={theme}>
            <div style={{ backgroundColor: 'red'}}>
                <h2> Software Developer Portfolio</h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsam similique facere? Nostrum repellat, veniam rem animi dolorem dolor accusantium. Animi laborum laudantium eaque tenetur explicabo velit sint, saepe reiciendis?</p>
                <Button onClick={toggleShow} variant='contained'>

                </Button>
                <ChildComponent />
                {show && <CssBaseline enableColorScheme />}

            </div>
        </ThemeProvider>
    )
}

function ChildComponent(){
    return (
        <ScopedCssBaseline enableColorScheme>
            <strong>Example</strong>
            <b>Example B</b>
            <div>Example PlainText Bro</div>
            <Box sx={boxStyles}>Testing Test</Box>
        </ScopedCssBaseline>
    )
}