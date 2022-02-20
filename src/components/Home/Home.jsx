import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Home = () => {
    return (
        <Box
            component="section"
            sx={{
                color: "black",
                backgroundColor: "rgba(255,255,255, 0.5)",
                width: "75%",
                marginLeft: "auto",
                marginRight: "auto",
                padding: "10px",
                marginTop: "5%",
                borderRadius: "5px"
            }}
        >
            <Typography variant="h4" sx={{ textAlign: "center" }}>
                Welcome to my Portfolio Page
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "center", marginTop: "10px" }}>Here you can find some information about me, a few of the projects I have worked
                on, and a link to my resume.  This site is a work in progress so apologies if it is in an unfinished state when you visit.  I hope you enjoy your time here! Contact me with any of these methods:
                <br></br>
                <br></br>
                <Link variant="inherit" underline="none" href="https://github.com/AlexParker82" target="_blank" rel="noopener">GitHub</Link>
                <br></br>
                <Link variant="inherit" underline="none" href="https://www.linkedin.com/in/alex-parker-087761219/"  target="_blank" rel="noopener">LinkedIn</Link>
                <br></br>
                noyes.parker@gmail.com
                </Typography>
        </Box>
    );
};

export default Home;
