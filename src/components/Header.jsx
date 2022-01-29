import React from "react";
import { Box, Typography, Breadcrumbs, Link } from "@mui/material";
import Typed from "react-typed";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
    headerBox: {
        position: "relative",
        width: "100vw",
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
});

const Header = () => {
    const classes = useStyles();

    return (
        <Box className={classes.headerBox}>
            <Typography variant="h4">Alex Parker</Typography>
            <Typography variant="h5">
                <Typed strings={['Web Development Portfolio']}
                    typeSpeed={60} />
            </Typography>
            <Breadcrumbs>
            <Link underline="hover" color="inherit" href="/">Home</Link>
            <Link underline="hover" color="inherit" href="/About">About</Link>
            <Link underline="hover" color="inherit" href="/Projects">Projects</Link>
            </Breadcrumbs>
        </Box>
    );
}

export default Header;

