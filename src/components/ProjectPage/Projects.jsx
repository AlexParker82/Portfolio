import React from "react";
import projectsData from "./projectsData";
import { Grid, Typography, Box } from "@mui/material";
import ProjectCard from "../ProjectCards/ProjectCards";
import Typed from "react-typed";

const Projects = () => {
    return (
        <Box component="section" sx={{
            backgroundColor: "rgba(255,255,255, 0.5)",
            height: "auto",
            width: "90%",
            marginTop: "5%",
            marginRight: "auto",
            marginLeft: "auto",
            alignItems: "center",
            borderRadius: "5px"
        }}>
            <Typography variant="h4" sx={{ textAlign: "center" }}>
                <Typed strings={["Projects"]} typeSpeed={60} />
            </Typography>
            <Grid container spacing={4} sx={{ padding: "10px" }}>
                {projectsData.map((project, index) => {
                    return (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <ProjectCard
                                img={project.img}
                                title={project.title}
                                description={project.description}
                                repo={project.repo}
                                deployed={project.live} />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}

export default Projects;
