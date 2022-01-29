import React from "react";
import { Typography, Link, BottomNavigation } from "@mui/material";

const Footer = () => {
    return (
        <footer style={{ display: "flex", justifyContent: "center" }}>
            
                <Typography variant="subtitle2">
                    noyes.parker@gmail.com
                </Typography>
                <Typography variant="subtitle2">
                    <Link underline="none" href="https://github.com/AlexParker82">GitHub</Link>
                </Typography>
                <Typography variant="subtitle2">
                    <Link underline="none" href="https://www.linkedin.com/in/alex-parker-087761219/">LinkedIn</Link>
                </Typography>

        </footer>
    );
}

export default Footer;