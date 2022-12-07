import React from 'react';
import Paper from '@mui/material/Paper';

const NoDataFound = () => {
    return (
        <>
            <Paper sx={{display: "flex", justifyContent: "center", alignItems: "center", height: "calc(100vh - 360px)" }} elevation={0}>
                No Data Found
            </Paper>
        </>
    );
};

export default NoDataFound;