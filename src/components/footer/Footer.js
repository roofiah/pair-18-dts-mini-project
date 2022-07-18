
import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

const listOne = [
    {
        id: 1,
        title: 'Audio and Subtitles',
        url: '-'
    },
    {
        id: 2,
        title: 'Media Center',
        url: '-'
    },
    {
        id: 3,
        title: 'Security',
        url: '-'
    },
    {
        id: 4,
        title: 'Contact us',
        url: '-'
    },
]

const listTwo = [
    {
        id: 1,
        title: 'Audio Description',
        url: '-'
    },
    {
        id: 2,
        title: 'Investor Relation',
        url: '-'
    },
    {
        id: 3,
        title: 'Legal Provisions',
        url: '-'
    },
]
const listThree = [
    {
        id: 1,
        title: 'Help Center',
        url: '-'
    },
    {
        id: 2,
        title: 'Jobs',
        url: '-'
    },
    {
        id: 3,
        title: 'Cookie Preferences',
        url: '-'
    },
]

const listFour = [
    {
        id: 1,
        title: 'Gift Cards',
        url: '-'
    },
    {
        id: 2,
        title: 'Terms of Use',
        url: '-'
    },
    {
        id: 3,
        title: 'Corporate Information',
        url: '-'
    },
]

const copyright = `© ${new Date().getFullYear()} Movies. All Rights Reserved`

const Footer = () => {
    return (
        <Container maxWidth="lg" color='secondary'>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={6} md={3}>
                    {/* <Box borderBottom={1}>Help</Box> */}
                    {listOne.map(data => (
                        <Box>
                            <Link href="/" color="inherit">
                                {data.title}
                            </Link>
                        </Box>
                    ))}
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    {listTwo.map(data => (
                        <Box>
                            <Link href="/" color="inherit">
                                {data.title}
                            </Link>
                        </Box>
                    ))}
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    {listThree.map(data => (
                        <Box>
                            <Link href="/" color="inherit">
                                {data.title}
                            </Link>
                        </Box>
                    ))}
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    {listFour.map(data => (
                        <Box>
                            <Link href="/" color="inherit">
                                {data.title}
                            </Link>
                        </Box>
                    ))}
                </Grid>
            </Grid>
            <button className='btn-footer'>Service Code</button>
            <div className='copyright'>{copyright}</div>
        </Container>
    )
}

export default Footer;