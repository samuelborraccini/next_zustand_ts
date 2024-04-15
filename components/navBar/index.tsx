"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { IoLogoAppleAr } from "react-icons/io5";
import Link from "next/link";
import useUserStore from "@/context";

const NavBar = () => {
  const { user, setUser } = useUserStore();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "black" }}>
        <Toolbar>
          <div className="pr-5">
            <IoLogoAppleAr size={30} />
          </div>
          <Link href={"/"} className="flex-grow">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              CubeApp
            </Typography>
          </Link>

          <Link href={"login"}>
            {user ? (
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {user.name}
              </Typography>
            ) : (
              <Button
                sx={{
                  color: "white",
                  borderColor: "slategray",
                  "&:hover": { borderColor: "white" },
                }}
                variant="outlined"
              >
                Login
              </Button>
            )}
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
