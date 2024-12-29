'use client';
import React, { useState } from "react";
import { Stack } from '@mui/material';
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { TextField, Box } from '@mui/material';

export default function Home() {
    const [selectedValue, setSelectedValue] = React.useState('a');
    const [heatHandleChange, setHeatHandleChange] = useState("");
    const [aiuoHandleChange, setAiuoHandleChange] = useState("");
    const [onigiriChange, setOnigiriChange] = useState("");
    const [text, setText] = useState("");
    const [yume, seYume] = useState("");


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedValue = event.target.value;
      setSelectedValue(selectedValue); 
      console.log(selectedValue); 
    };
  

    const onigiri = (event: React.ChangeEvent<HTMLInputElement>) => {
      const onigiriChange = event.target.value;
      setOnigiriChange(onigiriChange); 
      console.log(onigiriChange); 
    };


  return (
<Box sx={{ backgroundColor:"#",}}>
  <Box sx={{ width: "100%", backgroundColor:"#f5f5f5", "&:hover": { backgroundColor:"#eeeeee"},}}>
    <Stack direction="row" spacing={1} paddingLeft="10%" paddingTop="4%" paddingBottom="4%" alignItems="center">
     <FormControl>
      <FormLabel id="demo-radio-buttons-group-label" sx={{ color:"#000000",}}>わーい</FormLabel>
        <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group" onChange={onigiri}>
          <FormControlLabel value="しゃけ" control={
            <Radio sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="しゃけ" />
         <FormControlLabel value="たまご" control={
            <Radio sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="たまご" />
         <FormControlLabel value="おかか" control={
            <Radio sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="おかか" />
        </RadioGroup>
      </FormControl>
    </Stack>
  </Box>
  
  <Box sx={{ width:"100%", backgroundColor:"#f5f5f5", "&:hover": { backgroundColor:"#eeeeee"},}}>
    <Stack direction="row" spacing={1} paddingLeft="10%" paddingTop="4%" paddingBottom="4%" alignItems="center">
     <FormControl>
      <FormLabel id="demo-radio-buttons-group-label" sx={{ color:"#000000",}}>アイスクリーム</FormLabel>
      <TextField sx={{ borderColor: '#CCCCCC',  '&:hover fieldset': { borderColor: '#DDDDDD',},"& .MuiInputBase-input": { height: 50 }, width: "150%", }} placeholder="文字を入力" multiline rows={3} /></FormControl>
    </Stack>
  </Box>

  <Box sx={{ width: "100%", backgroundColor:"#f5f5f5", "&:hover": { backgroundColor:"#eeeeee"},}}>
    <Stack direction="row" spacing={1} paddingLeft="10%" paddingTop="4%" paddingBottom="4%" alignItems="center">
     <FormControl>
      <FormLabel id="demo-radio-buttons-group-label" sx={{ color:"#000000",}}>夢は何ですか?</FormLabel>
      <TextField value={yume} sx={{ borderColor: '#CCCCCC',  '&:hover fieldset': { borderColor: '#DDDDDD',},"& .MuiInputBase-input": { height: 50 }, width:"150%", }} placeholder="文字を入力" multiline rows={3} /></FormControl>
    </Stack>
  </Box>

  <Box sx={{ width: "100%", backgroundColor:"#f5f5f5", "&:hover": { backgroundColor:"#eeeeee"},}}>
    <Stack direction="row" spacing={1} paddingLeft="10%" paddingTop="4%" paddingBottom="4%" alignItems="center">
     <FormControl>
      <FormLabel id="demo-radio-buttons-group-label" sx={{ color:"#000000",}}>得意なことは何ですか?</FormLabel>
      <TextField value={yume} sx={{ borderColor: '#CCCCCC',  '&:hover fieldset': { borderColor: '#DDDDDD',},"& .MuiInputBase-input": { height: 50 }, width:"150%", }} placeholder="文字を入力" multiline rows={3} /></FormControl>
    </Stack>
  </Box>

  <Box sx={{ width: "100%", p: 2, backgroundColor:"#f5f5f5", "&:hover": { backgroundColor:"#eeeeee"},}}>
    <Stack direction="row" spacing={1} paddingLeft="10%" paddingTop="4%" paddingBottom="4%" alignItems="center">
    <FormControl>
    <FormLabel id="demo-radio-buttons-group-label" sx={{ color:"#000000",}}>理系？文系？</FormLabel>
      <RadioGroup aria-labelledby="demo-form-control-label-placement" name="position" defaultValue="top">
        <FormControlLabel value="bottom" control={
          <Radio value="humanitiesScience1"
            sx={{color: "#404040",fontSize:"0.5%", '&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 40,},}}/>} label="　　　　理系　　　　" labelPlacement="top"/>
        <FormControlLabel value="bottom" control={
        <Radio value="humanitiesScience2"
            sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#4a4a4a",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="どちらかというと理系" labelPlacement="top"/>
        <FormControlLabel value="bottom" control={
        <Radio value="humanitiesScience3"
            sx={{color: "#505050",'&.Mui-checked': { color: "#505050",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="　　どちらでもない　" labelPlacement="top"/>
        <FormControlLabel value="bottom" control={
        <Radio value="humanitiesScience4"
            sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#4a4a4a",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="どちらかというと文系" labelPlacement="top"/>
        <FormControlLabel value="end" control={
        <Radio value="humanitiesScience5"
            sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="　　　　文系　　　　" labelPlacement="top"/>
      </RadioGroup>
    </FormControl>
    </Stack>
    </Box>

    <Box sx={{ width: "100%", backgroundColor:"#f5f5f5", "&:hover": { backgroundColor:"#eeeeee"},}}>
    <Stack direction="row" spacing={1} paddingLeft="10%" paddingTop="4%" paddingBottom="4%" alignItems="center">
     <FormControl>
    <FormLabel id="demo-radio-buttons-group-label" sx={{ color:"#000000",}}>目標の偏差値は？</FormLabel>
      <RadioGroup aria-labelledby="demo-form-control-label-placement" name="position" defaultValue="top">
        <FormControlLabel value="bottom" control={
          <Radio value="humanitiesScience1"
            sx={{color: "#404040",fontSize:"0.5%", '&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 40,},}}/>} label="理系" />
        <FormControlLabel value="bottom" control={
        <Radio value="humanitiesScience2"
            sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#4a4a4a",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="どちらかというと理系" />
        <FormControlLabel value="bottom" control={
        <Radio value="humanitiesScience3"
            sx={{color: "#505050",'&.Mui-checked': { color: "#505050",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="どちらでもない" />
        <FormControlLabel value="bottom" control={
        <Radio value="humanitiesScience4"
            sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#4a4a4a",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="どちらかというと文系" />
        <FormControlLabel value="end" control={
            <Radio sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="文系" />
        <FormControlLabel value="おかか" control={
            <Radio sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="おかか" />
      </RadioGroup>
    </FormControl>
    </Stack>
    </Box>


    </Box>
);};


    {/* // https://isub.co.jp/react/nextjs/nextjs-checkbox-radio-select/　ラジオボタンのつくりかた
    // https://mui.com/material-ui/react-radio-button/  ラジオボタン公式
    // https://qiita.com/YumaInaura/items/5041c8b3778462148b58　onChangeで関数を送るヒント    */}