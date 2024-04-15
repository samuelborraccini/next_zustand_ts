"use client";
import { axiosClient } from "@/config/axiosClient";
import useUserStore from "@/context";
import { Button, Stack } from "@mui/material";
import Container from "@mui/material/Container";
import { FaRocket } from "react-icons/fa";

export default function Home() {
  const handleRestricted = async () => {
    const res = await axiosClient.get("users/protected");
    console.log(res.data);
  };
  return (
    <Container
      sx={{
        display: "flex", // Enable flex layout
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        height: "calc(100vh - 64px)",
      }}
    >
      <Stack sx={{ textAlign: "center" }} spacing={2}>
        <div className="text-8xl font-bold">Welcome to cube.</div>
        <div>
          The only place where you can impulse your ideas and grow your bussines
        </div>
        <div className="font-bold flex items-center justify-center space-x-2 cursor-pointer">
          <p>Try it now!</p> <FaRocket color="gray" />
        </div>
      </Stack>
    </Container>
  );
}
