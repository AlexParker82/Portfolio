import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box component="footer" sx={{ position: "absolute", bottom: "20px", width: "50%" }}>
            <Typography variant="body2" align="center">Copyright © Alex Parker 2022</Typography>
        </Box>
    );
}

export default Footer;