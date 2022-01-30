import React from "react";
import { Typography, Box } from "@mui/material";

const About = () => {
    return (
        <Box component="section" sx={{
            backgroundColor: "rgba(255,255,255, 0.5)",
            height: "auto",
            width: "75%",
            marginTop: "5%",
            marginRight: "auto",
            marginLeft: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "5px"

        }}>
            <Typography variant="h4" sx={{ padding: "5px" }}>
                About Me
            </Typography>
            <Typography variant="body1" sx={{
                paddingLeft: "10px",
                paddingRight: "10px",
                paddingBottom: "30px"
            }}>
                <Box
                    component="img"
                    src="./assets/images/profile.jpg"
                    sx={{
                        width: 210,
                        height: 210,
                        float: "left",
                        padding: "10px"
                    }}
                    alt="Me With Strawberries"
                />
                My name is Alex Parker and I am beginning my journey into the world of web development. For the last
                10 years
                I have been working in agriculture, and it has been incredibly rewarding and fulfilling. I have
                always had a deep appreciation
                for nature and the outdoors, so it was a natural progression to start learning how to provide
                healthy and delicious food for people using
                the great spaces and natural resources our planet has provided for us. But as I have gotten older, I
                am coming to realize the intense
                physicality of the work may not be sustainable for the long term, and I should start looking into
                developing another skill that I can use
                to advance my long term career.
                <br />
                <br />
                Ever since I was in middle school in the mid 90s when the internet was first becoming widely
                available, I was drawn to the possibilities
                that such a powerful tool could provide. I spent a lot of time trying to build websites on free
                hosting services such as Yahoo! Geocities.
                As time went on, my interests changed and lead me in different directions, but I have always
                maintained that curiosity in the back
                of my mind to try to understand how the internet works and to learn how to utilize and manipulate
                the technologies that have been developed
                to create such an incredible resource. This is what has finally lead me to take the plunge and
                enroll in a full stack web development
                bootcamp. At times it has been very frustrating and mentally challenging, but it has also been
                extremely interesting and
                rewarding to begin to put the pieces together and unravel some of the mysteries behind the inner
                workings of the internet and websites.
                I am very much looking forward to continuing my education and potentially shifting into a new career
                path. Below are
                a few examples of the projects we have built so far.

            </Typography>
        </Box>
    );
};

export default About;