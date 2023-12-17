import Typography, {TypographyProps} from '@mui/material/Typography'
import Divider, {DividerProps} from "@mui/material/Divider"
import { styled } from '@mui/material/styles'
import {Grid} from "@mui/material";

export interface HeaderProps extends TypographyProps {
    // render a divider component underneath the header text
    divider?: boolean,
    color?: string
}

const Text = styled(Typography)<HeaderProps>(({ theme, ...props }) => ({
    fontFamily:'oswald',
    letterSpacing: '.1rem',
    color: (props.color) ? props.color : theme.palette.primary.main,
    textAlign: "center"
}))
/*
 * Styled MUI Typography component with the Oswald font and custom spacing
 * @param color (optional) Text color. Default is theme.palette.primary.main
 * @param divider (optional) Render a subdivider under the header text. Uses text color. Default is false.
 */
export function Header(props:HeaderProps) {
    if (props.divider) {
        return (
            <Grid container direction={'column'} alignItems={'center'} justifyContent={'center'}>
                <Grid item>
                    <Text {...props} />
                </Grid>
                <Grid item width={'50%'} mt={1.5}>
                    <Divider
                        flexItem
                        sx={{
                            borderBottom:2.5,
                            borderRadius:1,
                            color:(props.color) ? props.color : 'primary.main'
                        }}
                    />
                </Grid>
            </Grid>
        )
    }
    else{
        return (
            <Text {...props } />
        )
    }
}
