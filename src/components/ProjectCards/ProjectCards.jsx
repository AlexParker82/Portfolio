import React from "react";
import { Card, CardHeader, CardMedia, CardContent, Button, Link, Typography } from "@mui/material";

const ProjectCard = (props) => {
    return (
        <Card sx={{ padding: "5px", width: 400, height: "auto", margin: "10px", display: "flex", flexDirection: "column", alignItems: "center" }} >
            <CardHeader
                title={props.title}
                subheader={props.technologies}
            />
            <CardMedia
                component="img"
                height="200"
                width="200"
                image={props.img}
            />
            <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="body2">
                    {props.description}
                </Typography>
                <Button >
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