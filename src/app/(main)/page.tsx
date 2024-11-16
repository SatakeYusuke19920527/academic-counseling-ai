// 'use client';
// import FormInput from '@/components/FormInput/FormInput';
// import MessageArea from '@/components/MessageArea/MessageArea';

// export default function Home() {
//   return (
//     <main className="flex flex-col text-gray-800 w-full h-full overflow-y-auto">
//       <div className="flex bg-slate-300 h-5/6 p-4 justify-center">
//         <MessageArea />
//       </div>
//       <div className="flex h-1/6 p-4 justify-center items-center">
//         <FormInput />
//       </div>
//     </main>
//   );
// }




'use client';
import React, { useState } from "react";
import { Stack } from "@mui/material";
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
        name: string,
        value: "1" | "2" | "3" | "4" | "5",
        color: "primary" | "secondary" | "success" | "error" | "warning",
        size?: "small" | "medium" | undefined
      ) => ({
        name,
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
              backgroundColor:"#99CCFF",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                alignItems="center"
                >
          <RadioGroup row>
            <FormControlLabel
              label="文系"
              control={<Radio {...radioProps("female","1", "warning")} />}
            />
            <FormControlLabel
              label="どちらでもない"
              control={<Radio {...radioProps("male","3", "error", "small")} />}
            />
            <FormControlLabel
              label="理系"
              control={
                <Radio
                  {...radioProps("other","5", "success")}sx={{ "& .MuiSvgIcon-root": { fontSize: 36 } }}
                />
              }
            />
          </RadioGroup>
          </Stack>
        </Box>
      );
    };

    // https://isub.co.jp/react/nextjs/nextjs-checkbox-radio-select/　ラジオボタンのつくりかた
    // https://qiita.com/YumaInaura/items/5041c8b3778462148b58　onChangeで関数を送るヒント