
import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

const Footer = () => {
    return (
        <Box>
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        {/* <Box borderBottom={1}>Help</Box> */}
                        <Box>
                            <Link href="/" color="inherit">
                                Audio and Subtitles
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Media Center
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Security
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Contact us
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        {/* <Box borderBottom={1}>Account</Box> */}
                        <Box>
                            <Link href="/" color="inherit">
                                Audio Description
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Investor Relations
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Legal Provisions
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        {/* <Box borderBottom={1}>Messages</Box> */}
                        <Box>
                            <Link href="/" color="inherit">
                                Help center
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Jobs
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Cookie Preferences
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Footer;