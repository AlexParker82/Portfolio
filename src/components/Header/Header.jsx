import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Breadcrumbs } from "@mui/material";
import Typed from "react-typed";

const Header = () => {

    return (
        <Box sx={{
            color: "white",
            position: "relative",
            width: "100vw",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <Typography variant="h4">Alex Parker</Typography>
            <Typography variant="h5">
                <Typed strings={['Web Development Portfolio']}
                    typeSpeed={60} />
            </Typography>
            <Breadcrumbs>
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Projects">Projects</Link>
                <a href="https://docs.google.com/document/d/1kiugY1WHRa2Lqv25Me61ixeibAI6rsm9e23KnnLl2OU/edit?usp=sharing" target="blank">Resume</a>
            </Breadcrumbs>
        </Box>
    );
}

export default Header;

