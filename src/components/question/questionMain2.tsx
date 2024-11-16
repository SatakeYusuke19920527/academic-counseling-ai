'use client';
import React, { useState } from "react";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

export default function questionMain2() {
      const [selectedValue, setSelectedValue] = useState("female");
      const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue((e.target as HTMLInputElement).value);
      };
    
      const radioProps = (
        value: string,
        color: "primary" | "secondary" | "success" | "error" | "warning",
        size?: "small" | "medium" | undefined
      ) => ({
        value,
        color,
        size,
        checked: selectedValue === value,
        onChange: handleRadioChange,
      });
    
      return (
        <Box
          sx={{
            width: "100%",
            p: 2,
            border: "1px dashed grey",
            borderRadius: "20px",
            "&:hover": {
              backgroundColor: "yellow",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <RadioGroup row>
            <FormControlLabel
              label="Female"
              control={<Radio {...radioProps("female", "warning")} />}
            />
            <FormControlLabel
              label="Male"
              control={<Radio {...radioProps("male", "error", "small")} />}
            />
            <FormControlLabel
              label="Other"
              control={
                <Radio
                  {...radioProps("other", "success")}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 36 } }}
                />
              }
            />
          </RadioGroup>
        </Box>
      );
    };

// export default questionMain2;