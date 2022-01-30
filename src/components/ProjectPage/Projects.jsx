import React from "react";
import projectsData from "./projectsData";
import { Grid, Typography } from "@mui/material";
import ProjectCard from "../ProjectCards/ProjectCards";

const Projects = () => {
    return (
        <Grid container spacing={2} sx={{ marginTop: "20px", justifyContent: "center", backgroundColor: "rgba(255,255,255, 0.75)" }}>
            <Grid item xs={12} sx={{ marginBottom: "10px" }}>
                <Typography variant="h2" sx={{ textAlign: "center" }}>Projects</Typography>
            </Grid>
            {projectsData.map((project, index) => {
                return (
                    <Grid key={index} item xs={12} md={6} lg={4}>
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

    )

}

export default Projects;
