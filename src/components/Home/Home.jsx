import React from "react";
import { Box, Typography } from "@mui/material";

const Home = () => {
    return (
        <Box
            component="section"
            sx={{
                height: "500px",
                textAlign: "center",
                position: "absolute",
                top: "20%"
            }}
        >
            <Typography variant="h4" sx={{ color: "white" }}>Welcome to my Portfolio Page</Typography>
            <Typography variant="body1" sx={{ color: "white" }}>Here you can find some information about me, a few of the projects I have worked
                on, and a link to my resume.  I hope you enjoy your time here!</Typography>
        </Box>
    );
};

export default Home;
