import React from "react";
import { Box, Typography } from "@mui/material";
import Typed from "react-typed";

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
                <Typed strings={["Welcome to my Portfolio Page"]} typeSpeed={60} />
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "center" }}>Here you can find some information about me, a few of the projects I have worked
                on, and a link to my resume.  I hope you enjoy your time here!</Typography>
        </Box>
    );
};

export default Home;
