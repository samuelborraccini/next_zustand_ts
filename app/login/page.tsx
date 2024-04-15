"use client";
import useUserStore from "@/context";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";

interface User {
  user: {
    name: string;
    sub: number;
  };
  access_token: string;
}

const Login = () => {
  const router = useRouter();
  const { user, setUser } = useUserStore();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post<User>("http://localhost:4000/login", form);
      setUser(res.data.user, res.data.access_token);
      router.push("/");
    } catch (error) {
      console.log("error");
    }
  };
  console.log("render");

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };
  return (
    <div
      style={{ minHeight: "calc(100vh - 64px)" }}
      className="flex justify-center items-center"
    >
      <Paper
        sx={{ padding: "50px", backgroundColor: "whitesmoke" }}
        elevation={3}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyItems={"center"}
          sx={{ flexDirection: "column" }}
          component={"form"}
          noValidate
          autoComplete="off"
          onSubmit={handleClick}
        >
          <Typography variant="h4" sx={{ paddingBottom: "10px" }}>
            Sign in
          </Typography>
          <Typography
            variant="body1"
            fontStyle={"italic"}
            sx={{ paddingBottom: "30px" }}
            color={"gray"}
          >
            Fill with your credentials below.
          </Typography>
          <Box
            display={"flex"}
            paddingBottom={4}
            alignItems={"center"}
            component={"div"}
          >
            <FaUser size={20} color="gray" className="mx-5" />
            <TextField
              label="Username"
              id="username"
              variant="outlined"
              size="small"
              value={form.username}
              onChange={handleFormChange}
            />
          </Box>
          <Box display={"flex"} alignItems={"center"} component={"div"}>
            <FaUnlock size={20} color="gray" className="mx-5" />
            <TextField
              label="Password"
              variant="outlined"
              size="small"
              id="password"
              value={form.password}
              onChange={handleFormChange}
            />
          </Box>
          <Box display={"flex"} alignItems={"center"} component={"div"}>
            <Button
              sx={{
                color: "gray",
                borderColor: "slategray",
                "&:hover": { borderColor: "bl" },
                marginTop: "30px",
              }}
              variant="outlined"
              type="submit"
            >
              Sign in
            </Button>
          </Box>
        </Box>
      </Paper>
    </div>
  );
};

export default Login;
