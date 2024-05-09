"use client";

import { Box } from "@/components/Box";
import { BounceLoader } from "react-spinners";

export const loading = () => {
  return (
    <Box className="h-full flex items-center justify-center">
        <BounceLoader color="#22c55e" size={40} />
    </Box>
  )
}
