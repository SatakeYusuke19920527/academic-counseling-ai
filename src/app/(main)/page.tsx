'use client';
import Link from 'next/link';
import React from "react";
import { Box } from '@mui/material';

export default function Home() {
return (
  <Box>
  <Link href="/question" className="mt-4 text-xl text-blue-600 hover: underline">質問</Link>
  <Link href="/result">go to result Page</Link>
    </Box>
);};