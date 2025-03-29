// app/login/page.tsx
'use client'
import Link from "next/link";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ backgroundColor: "#f0f0f0" }}> {/* 背景色を正しい値に修正 */}
      <Link href="/">Go to Home</Link>
    </Box>
  );
}
