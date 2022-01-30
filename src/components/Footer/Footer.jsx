import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box component="footer" sx={{ position: "absolute", bottom: 0, width: "100%", textAlign: "center" }}>
            <Typography variant="body2" sx={{ color: "whitesmoke" }}>Copyright © Alex Parker 2022</Typography>
        </Box>
    );
}

export default Footer;