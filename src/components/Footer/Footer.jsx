import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box component="footer"
            sx={{
                width: "75%",
                marginLeft: "auto",
                marginRight: "auto",
            }}
        >
            <Typography variant="body2" sx={{ color: "gray", textAlign: "center", marginTop: "20px" }}>Alex Parker 2022</Typography>
        </Box>
    );
}

export default Footer;