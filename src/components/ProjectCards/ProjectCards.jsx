import React from "react";
import { Card, CardHeader, CardMedia, CardContent, Button, Link, Typography } from "@mui/material";

const ProjectCard = (props) => {
    return (
        <Card sx={{ height: "auto", display: "flex", flexDirection: "column" }} >
            <CardHeader
                title={props.title}
                subheader={props.technologies}
                sx={{ textAlign: "center" }}
            />
            <CardMedia
                component="img"
                image={props.img}
                sx={{ padding: "5px" }}
            />
            <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="body2">
                    {props.description}
                </Typography>
                <Button>
                   <Link href={props.repo}>Repo</Link>
                </Button>
                <Button>
                   <Link href={props.deployed}>Deployed App</Link> 
                </Button>
            </CardContent>
        </Card>
    );
};

export default ProjectCard;