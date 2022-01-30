import React from "react";
import projectsData from "./projectsData";
import { Grid, Typography, Box } from "@mui/material";
import ProjectCard from "../ProjectCards/ProjectCards";

// const Projects = () => {
//     return (
//         <Grid container spacing={2} sx={{ marginTop: "20px", justifyContent: "center", backgroundColor: "rgba(255,255,255, 0.75)" }}>
//             <Grid item xs={12} sx={{ marginBottom: "10px" }}>
//                 <Typography variant="h2" sx={{ textAlign: "center" }}>Projects</Typography>
//             </Grid>
//             {projectsData.map((project, index) => {
//                 return (
//                     <Grid key={index} item xs={12} md={6} lg={4}>
//                         <ProjectCard
//                             img={project.img}
//                             title={project.title}
//                             description={project.description}
//                             repo={project.repo}
//                             deployed={project.live} />
//                     </Grid>
//                 );
//             })}
//         </Grid>

//     )

// }

const Projects = () => {
    return (
        <Box component="section" sx={{
            backgroundColor: "rgba(255,255,255, 0.5)",
            height: "auto",
            width: "75%",
            marginTop: "5%",
            marginRight: "auto",
            marginLeft: "auto",
            alignItems: "center",
            borderRadius: "5px"
        }}>
            <Typography variant="h4" sx={{ textAlign: "center" }}>Projects</Typography>
            <Grid container spacing={4} sx={{ padding: "10px" }}>
                {projectsData.map((project, index) => {
                    return (
                        <Grid item key={index} item xs={12} md={6} md={4}>
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
