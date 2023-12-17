import React from 'react';
import {Box, CssBaseline, Grid, ThemeProvider, Typography} from '@mui/material'
import theme from "./theme";
import {Header} from "./Header";
import Divider from "@mui/material/Divider";
import SalaryDist from "./SalaryDistribution.jpg"
import Heatmap from "./Heatmap.jpg"
import WageVsGoals from "./WageVsGoalContribution.jpg"
import TeamsVPts from "./TeamsVsPoints.jpg"
function App() {
    return (
<ThemeProvider theme={theme}>
<CssBaseline />
<Box
    sx={{
        display:'flex',
        flexGrow: 1,
        flexDirection:'column',
        minHeight:'100vh'
    }}
>
    <Grid
        container
        direction={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        spacing={0}
        // removes default margin from navbar
        // mt={-4}
        mb={4}
    >
        <Grid
            container
            direction={'column'}
            height={'100vh'}
            width={'100%'}
            sx={{backgroundColor: 'primary.dark'}}
            alignItems={'center'} justifyContent={'space-evenly'}
            spacing={0}
        >
            <Grid item>
                <Header variant={'h2'} color={'secondary.main'}>
                    Is the Premier League Pay-to-Win?
                </Header>
            </Grid>
            <Grid item>
                <Typography color='white' variant={'h3'}>By Ari Menezes</Typography>
                </Grid>
        </Grid>

        <Grid
            container
            direction={'column'}
            width={'100%'}
            sx={{backgroundColor: 'primary.dark'}}
            alignItems={'center'} justifyContent={'flex-start'}
            spacing={0}
            xs={8} mb={'10vh'}
        >
            <Divider flexItem color={'#FFDC44'} sx={{ borderBottomWidth: 4, borderRadius:2 }}/>
            <Grid item my={'10vh'}>
                <Typography variant={'h5'} color={'white'} textAlign={'center'}>
                    The English Premier League is football's most competitive, lucrative,
                    and prestigious national league. The title is hotly contested, and teams
                    at the bottom end of the standings regularly take games off those at the top.
                    In the past 2 decades, viewership of the PL exploded, and with it came a pouring
                    in of money into the league. While there are many controversies surrounding the
                    owners of certain clubs, a continual complaint from the average PL fan in the past
                    few decades is that "money is ruining the sport". Most fans would tell you that the
                    league has become 'Pay to Win', especially with the recent dominance of Manchester City
                    and their massive Saudi wealth fund backed payroll. This analysis attempts to see if
                    one can truly buy their way to one of the most coveted trophies in sport.
                </Typography>
            </Grid>
            <Divider flexItem color={'#FFDC44'} sx={{ borderBottomWidth: 4, borderRadius:2 }}/>
        </Grid>

        <Grid
            container
            direction={'row'}
            width={'100%'}
            sx={{backgroundColor: 'primary.dark'}}
            alignItems={'center'} justifyContent={'space-evenly'}
            spacing={0}
            mb={5}
        >
            <Grid item xs={3}>
                <Typography variant={'h6'} color={'white'}>
                    While eye-catching headlines report on superstar salaries in the excess of
                    200 thousand pounds a week, the vast majority of players in the PL make a
                    "modest" salary of around 25 to 100 thousand pounds. <br/><br/>
                    The top placing teams are evidently able to attract more talent with higher salaries,
                    but these offers seemingly target superstar prospects, and the bulk of the team falls
                    in line with the overall distribution.
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Box component={'img'} src={SalaryDist} sx={{width:'100vh', height:'90vh'}}/>
            </Grid>
        </Grid>
        <Grid
            container
            direction={'row'}
            width={'100%'}
            sx={{backgroundColor: 'primary.dark'}}
            alignItems={'center'} justifyContent={'space-evenly'}
            spacing={0}
            mb={5}
        >
            <Grid item xs={6}>
                <Box component={'img'} src={Heatmap} sx={{width:'100vh', height:'90vh'}}/>
            </Grid>
            <Grid item xs={3}>
                <Typography variant={'h6'} color={'white'}>
                    As can be seen, there's a priority on investment into forwards
                    (and midfielders to a lesser degree) across the whole league, but
                    especially from the top teams. We can see Chelsea (historically a top team)
                    heavily underperformed the amount that it spent, while Brighton
                    and Brentford overperformed.
                </Typography>
            </Grid>
        </Grid>
        <Grid
            container
            direction={'row'}
            width={'100%'}
            sx={{backgroundColor: 'primary.dark'}}
            alignItems={'center'} justifyContent={'space-evenly'}
            spacing={0}
            mb={5}
        >
            <Grid item xs={3}>
                <Typography variant={'h6'} color={'white'}>
                    Despite an emphasis on attacking players by teams,
                    there is evidently no correlation between salary
                    and performance on the player's end. Outside of a handful
                    of outliers, the vast majority of players fall in the same
                    range of goal contributions as the rest.
                    Many players paid significantly less actually
                    outperform those with superstar salaries.
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Box component={'img'} src={WageVsGoals} sx={{width:'100vh', height:'90vh'}}/>
            </Grid>
        </Grid>
        <Grid
            container
            direction={'row'}
            width={'100%'}
            sx={{backgroundColor: 'primary.dark'}}
            alignItems={'center'} justifyContent={'space-evenly'}
            spacing={0}
            mb={5}
        >
            <Grid item xs={6}>
                <Box component={'img'} src={TeamsVPts} sx={{width:'100vh', height:'90vh'}}/>
            </Grid>
            <Grid item xs={5}>
                <Typography variant={'h6'} color={'white'}>
                    In the Premier League, teams earn 3 points for a win
                    and 1 point for a draw, playing 38 games per season, twice each
                    against the 19 other teams.
                    While the theoretical maximum is 114,
                    the most points ever achieved is 100, by Manchester City during the 2017-18 season.
                    <br/> <br/>
                    While player performance is uncorrelated to salary, as shown previously, there
                    a slight correlation between team spending and how well they do in the league. While
                    there is inherent bias because there are only 20 teams, and only 5 have anything
                    close to the budgets to reach 100M and above, going from 50M to 100M definitely makes
                    your chances of overperforming higher.
                </Typography>
            </Grid>
        </Grid>



    </Grid>
</Box>
</ThemeProvider>
    );
}

export default App;
