import React, {useState} from "react";
import {
    LightModeOutlined,
    DarkModeOutlined,
    Menu as MenuIcon,
    Search,
    SettingsOutlined,
} from "@mui/icons-material";
import FlexBetween from "./FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "state";
import { AppBar, Toolbar, useTheme } from "@mui/material";


const NavBar = ()=>{

    const dispatch = useDispatch();
    const them = useTheme();

    return (
        <AppBar sx={{
            position: "static",
            background: "none"
        }}>
            <Toolbar sx={{ justifyContent: "space-between" }}>

            </Toolbar>
        </AppBar>
    );
};

export default NavBar;