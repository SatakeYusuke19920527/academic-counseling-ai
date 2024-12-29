'use client';
import Link from 'next/link';
import React, { useState } from "react";
import { Stack } from '@mui/material';
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { TextField, Box } from '@mui/material';

export default function Home() {
    const [onigiriChange, setOnigiriChange] = useState("");
    const [tokuinakotoChange, setTokuinakotoChange] = useState("");
    const [rikeibunkeiChange, setRikeibunkeiChange] = useState("");
    const [hensachiChange, setHensachiChange] = useState("");
    const [first, setFirst] = useState("")
    const [tokuinakoto, settTokuinakoto] = useState("")
    const [handleChangeChange, setHandleChangeChange] = useState("");
    const [juunenngoChange, setJuunenngoChange] = useState("");
    const [donnahatarakikataChange, setDonnahatarakikataChange] = useState("");
    const [syuunyuutoyarigaiChange, setSyuunyuutoyarigaiChange] = useState("");
    const [sukinakamokuChange, setSukinakamokuChange] = useState("");
    const [tokuinakamokuChange, setTokuinakamokuChange] = useState("");
    const [nigatenakamokuChange, setNigatenakamokuChange] = useState("");
    const [donoyounasigoto, setDonoyounasigoto] = useState("")
    const [sigotodekakawaritaihito, setSigotodekakawaritaihito] = useState("")
    const [hatarakumokuteki, setHatarakumokuteki] = useState("")



    const onigiri = (event: React.ChangeEvent<HTMLInputElement>) => {
      const onigiriChange = event.target.value;
      setOnigiriChange(onigiriChange); 
      console.log(onigiriChange); 
    };
    const rikeibunnkei = (event: React.ChangeEvent<HTMLInputElement>) => {
      const rikeibunkeiChange = event.target.value;
      setRikeibunkeiChange(rikeibunkeiChange); 
      console.log(rikeibunkeiChange); 
    };
    const hensachi = (event: React.ChangeEvent<HTMLInputElement>) => {
      const hensachiChange = event.target.value;
      setHensachiChange(hensachiChange); 
      console.log(hensachiChange); 
    };
    const tokuinakotoChangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newTokuinakoto = event.target.value;
      settTokuinakoto(newTokuinakoto); // 正しい状態を更新
      console.log(newTokuinakoto);
    };
    const juunenngo = (event: React.ChangeEvent<HTMLInputElement>) => {
      const juunenngoChange = event.target.value;
      setJuunenngoChange(juunenngoChange); 
      console.log(juunenngoChange); 
    };
    const donnahatarakikata = (event: React.ChangeEvent<HTMLInputElement>) => {
      const donnahatarakikataChange = event.target.value;
      setDonnahatarakikataChange(donnahatarakikataChange); 
      console.log(donnahatarakikataChange); 
    };
    const syuunyuutoyarigai = (event: React.ChangeEvent<HTMLInputElement>) => {
      const syuunyuutoyarigaiChange = event.target.value;
      setSyuunyuutoyarigaiChange(syuunyuutoyarigaiChange); 
      console.log(syuunyuutoyarigaiChange); 
    };

    const sukinakamoku = (event: React.ChangeEvent<HTMLInputElement>) => {
      const sukinakamokuChange = event.target.value;
      setSukinakamokuChange(sukinakamokuChange); 
      console.log(sukinakamokuChange); 
    };
    const tokuinakamoku = (event: React.ChangeEvent<HTMLInputElement>) => {
      const tokuinakamokuChange = event.target.value;
      setTokuinakamokuChange(tokuinakamokuChange); 
      console.log(tokuinakamokuChange); 
    };    
    const nigatenakamoku = (event: React.ChangeEvent<HTMLInputElement>) => {
      const nigatenakamokuChange = event.target.value;
      setNigatenakamokuChange(nigatenakamokuChange); 
      console.log(nigatenakamokuChange); 
    };
    const donoyounasigotoChangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newDonoyounasigoto = event.target.value;
      setDonoyounasigoto(newDonoyounasigoto); // 正しい状態を更新
      console.log(newDonoyounasigoto);
    };
    const sigotodekakawaritaihitoChangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newSigotodekakawaritaihito = event.target.value;
      setSigotodekakawaritaihito(newSigotodekakawaritaihito); // 正しい状態を更新
      console.log(newSigotodekakawaritaihito);
    };
    const hatarakumokutekiChangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newHatarakumokuteki = event.target.value;
      setHatarakumokuteki(newHatarakumokuteki); // 正しい状態を更新
      console.log(newHatarakumokuteki);
    };

return (
  <Box sx={{ backgroundColor:"#",}}>
  <Link href="/" className="mt-4 text-xl text-blue-600 hover: underline">質問</Link>
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

  <Box sx={{ width: "100%", backgroundColor:"#f5f5f5", "&:hover": { backgroundColor:"#eeeeee"},}}>
    <Stack direction="row" spacing={1} paddingLeft="10%" paddingRight="10%" paddingTop="4%" paddingBottom="4%" alignItems="center">
     <FormControl><FormLabel id="demo-radio-buttons-group-label" sx={{ color:"#000000",}}>-得意なことは何ですか?-　　　　　　　　　　　</FormLabel>
      <TextField value={tokuinakoto} onChange={tokuinakotoChangeChange} sx={{ borderColor: '#CCCCCC',  '&:hover fieldset': { borderColor: '#DDDDDD',},"& .MuiInputBase-input": { height: 50 }, width:"100%", }} placeholder="文字を入力" multiline rows={3} /></FormControl>
    </Stack></Box>

  <Box sx={{ width: "100%", backgroundColor:"#f5f5f5", "&:hover": { backgroundColor:"#eeeeee"},}}>
    <Stack direction="row" spacing={1} paddingLeft="10%" paddingTop="4%" paddingBottom="4%" alignItems="center">
     <FormControl><FormLabel id="demo-radio-buttons-group-label" sx={{ color:"#000000",}}>-理系？文系？-</FormLabel>
     <RadioGroup aria-labelledby="demo-radio-buttons-group-label" onChange={rikeibunnkei}>
        <FormControlLabel value="理系" control={
          <Radio sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="理系" />
        <FormControlLabel value="どちらかというと理系" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="どちらかというと理系" />
        <FormControlLabel value="どちらでもない" control={
          <Radio sx={{color: "#505050",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="どちらでもない" />
        <FormControlLabel value="どちらかというと文系" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="どちらかというと文系" />
        <FormControlLabel value="文系" control={
          <Radio sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="文系" />
      </RadioGroup></FormControl></Stack></Box>

  <Box sx={{ width: "100%", backgroundColor:"#f5f5f5", "&:hover": { backgroundColor:"#eeeeee"},}}>
    <Stack direction="row" spacing={1} paddingLeft="10%" paddingTop="4%" paddingBottom="4%" alignItems="center">
     <FormControl><FormLabel id="demo-radio-buttons-group-label" sx={{ color:"#000000",}}>-目標の偏差値は？-</FormLabel>
     <RadioGroup aria-labelledby="demo-radio-buttons-group-label" onChange={hensachi}>
        <FormControlLabel value="目標の偏差値:~40" control={
          <Radio sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="~40" />
        <FormControlLabel value="目標の偏差値:40~45" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="40~45" />
        <FormControlLabel value="目標の偏差値:45~50" control={
          <Radio sx={{color: "#505050",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="45~50" />
        <FormControlLabel value="目標の偏差値:50~55" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="50~55" />
        <FormControlLabel value="目標の偏差値:55~60" control={
          <Radio sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="55~60" />
        <FormControlLabel value="目標の偏差値:60~65" control={
          <Radio sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="60~65" />
        <FormControlLabel value="目標の偏差値:65~70" control={
          <Radio sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="65~70" />
        <FormControlLabel value="目標の偏差値:70~" control={
          <Radio sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="70~" />
      </RadioGroup></FormControl></Stack></Box>

  <Box sx={{ width: "100%", backgroundColor:"#f5f5f5", "&:hover": { backgroundColor:"#eeeeee"},}}>
    <Stack direction="row" spacing={1} paddingLeft="10%" paddingTop="4%" paddingBottom="4%" alignItems="center">
     <FormControl><FormLabel id="demo-radio-buttons-group-label" sx={{ color:"#000000",}}>-10年後どんな生活をおくりたいですか？-</FormLabel>
     <RadioGroup aria-labelledby="demo-radio-buttons-group-label" onChange={juunenngo}>
        <FormControlLabel value="10年後の生活:都会で働いている" control={
          <Radio sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="都会で働いている" />
        <FormControlLabel value="10年後の生活:家族と穏やかに暮らしている" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="家族と穏やかに暮らしている" />
        <FormControlLabel value="10年後の生活:海外で挑戦しているなど" control={
          <Radio sx={{color: "#505050",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="海外で挑戦しているなど" />
      </RadioGroup></FormControl></Stack></Box>

  <Box sx={{ width: "100%", backgroundColor:"#f5f5f5", "&:hover": { backgroundColor:"#eeeeee"},}}>
    <Stack direction="row" spacing={1} paddingLeft="10%" paddingTop="4%" paddingBottom="4%" alignItems="center">
     <FormControl><FormLabel id="demo-radio-buttons-group-label" sx={{ color:"#000000",}}>-どんな仕事をしたいですか？または、どんな働き方をしたいですか？-</FormLabel>
     <RadioGroup aria-labelledby="demo-radio-buttons-group-label" onChange={donnahatarakikata}>
        <FormControlLabel value="どんな仕事をしたい?:安定した仕事" control={
          <Radio sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="安定した仕事" />
        <FormControlLabel value="どんな仕事をしたい?:挑戦的な仕事" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="挑戦的な仕事" />
        <FormControlLabel value="どんな仕事をしたい?:フリーランス" control={
          <Radio sx={{color: "#505050",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="フリーランス" />
        <FormControlLabel value="どんな仕事をしたい?:自営業" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="自営業" />
      </RadioGroup></FormControl></Stack></Box>

  <Box sx={{ width: "100%", backgroundColor:"#f5f5f5", "&:hover": { backgroundColor:"#eeeeee"},}}>
    <Stack direction="row" spacing={1} paddingLeft="10%" paddingTop="4%" paddingBottom="4%" alignItems="center">
     <FormControl><FormLabel id="demo-radio-buttons-group-label" sx={{ color:"#000000",}}>-収入とやりがい、どちらを優先したいですか？-</FormLabel>
     <RadioGroup aria-labelledby="demo-radio-buttons-group-label" onChange={syuunyuutoyarigai}>
        <FormControlLabel value="収入とやりがい、優先したいほう:収入優先" control={
          <Radio sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="収入優先" />
        <FormControlLabel value="収入とやりがい、優先したいほう:どちらかといえば収入優先" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="どちらかといえば収入優先" />
        <FormControlLabel value="収入とやりがい、優先したいほう:どちらでもない" control={
          <Radio sx={{color: "#505050",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="どちらでもない" />
        <FormControlLabel value="収入とやりがい、優先したいほう:どちらかといえばやりがい優先" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="どちらかといえばやりがい優先" />
        <FormControlLabel value="収入とやりがい、優先したいほう:やりがい優先" control={
          <Radio sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="やりがい優先" />
      </RadioGroup></FormControl></Stack></Box>

  <Box sx={{ width: "100%", backgroundColor:"#f5f5f5", "&:hover": { backgroundColor:"#eeeeee"},}}>
    <Stack direction="row" spacing={1} paddingLeft="10%" paddingTop="4%" paddingBottom="4%" alignItems="center">
     <FormControl><FormLabel id="demo-radio-buttons-group-label" sx={{ color:"#000000",}}>-好きな科目は？-</FormLabel>
     <RadioGroup aria-labelledby="demo-radio-buttons-group-label" onChange={sukinakamoku}>
        <FormControlLabel value="好きな科目:国語" control={
          <Radio sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="国語" />
        <FormControlLabel value="好きな科目:現代文" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="現代文" />
        <FormControlLabel value="好きな科目:古文" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="古文" />
        <FormControlLabel value="好きな科目:数学" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="数学" />
        <FormControlLabel value="好きな科目:英語" control={
          <Radio sx={{color: "#505050",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="英語" />
        <FormControlLabel value="好きな科目:外国語" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="外国語" />
        <FormControlLabel value="好きな科目:理科" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="理科" />
        <FormControlLabel value="好きな科目:化学" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="化学" />
        <FormControlLabel value="好きな科目:物理" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="物理" />
        <FormControlLabel value="好きな科目:地学" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="地学" />
        <FormControlLabel value="好きな科目:社会" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="社会" />
       <FormControlLabel value="好きな科目:日本史" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="日本史" />
        <FormControlLabel value="好きな科目:世界史" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="世界史" />
        <FormControlLabel value="好きな科目:公民" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="公民" />
        <FormControlLabel value="好きな科目:地理" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="地理" />  
        <FormControlLabel value="好きな科目:美術" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="美術" /> 
        <FormControlLabel value="好きな科目:体育" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="体育" />  
      </RadioGroup></FormControl></Stack></Box>

  <Box sx={{ width: "100%", backgroundColor:"#f5f5f5", "&:hover": { backgroundColor:"#eeeeee"},}}>
    <Stack direction="row" spacing={1} paddingLeft="10%" paddingTop="4%" paddingBottom="4%" alignItems="center">
     <FormControl><FormLabel id="demo-radio-buttons-group-label" sx={{ color:"#000000",}}>-得意な科目は？-</FormLabel>
     <RadioGroup aria-labelledby="demo-radio-buttons-group-label" onChange={tokuinakamoku}>
        <FormControlLabel value="得意な科目:国語" control={
          <Radio sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="国語" />
        <FormControlLabel value="得意な科目:現代文" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="現代文" />
        <FormControlLabel value="得意な科目:古文" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="古文" />
        <FormControlLabel value="得意な科目:数学" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="数学" />
        <FormControlLabel value="得意な科目:英語" control={
          <Radio sx={{color: "#505050",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="英語" />
        <FormControlLabel value="得意な科目:外国語" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="外国語" />
        <FormControlLabel value="得意な科目:理科" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="理科" />
        <FormControlLabel value="得意な科目:化学" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="化学" />
        <FormControlLabel value="得意な科目:物理" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="物理" />
        <FormControlLabel value="得意な科目:地学" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="地学" />
        <FormControlLabel value="得意な科目:社会" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="社会" />
       <FormControlLabel value="得意な科目:日本史" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="日本史" />
        <FormControlLabel value="得意な科目:世界史" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="世界史" />
        <FormControlLabel value="得意な科目:公民" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="公民" />
        <FormControlLabel value="得意な科目:地理" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="地理" />  
        <FormControlLabel value="得意な科目:美術" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="美術" /> 
        <FormControlLabel value="得意な科目:体育" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="体育" />  
      </RadioGroup></FormControl></Stack></Box>

  <Box sx={{ width: "100%", backgroundColor:"#f5f5f5", "&:hover": { backgroundColor:"#eeeeee"},}}>
    <Stack direction="row" spacing={1} paddingLeft="10%" paddingTop="4%" paddingBottom="4%" alignItems="center">
     <FormControl><FormLabel id="demo-radio-buttons-group-label" sx={{ color:"#000000",}}>-苦手な科目は？-</FormLabel>
     <RadioGroup aria-labelledby="demo-radio-buttons-group-label" onChange={nigatenakamoku}>
        <FormControlLabel value="苦手な科目:国語" control={
          <Radio sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="国語" />
        <FormControlLabel value="苦手な科目:現代文" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="現代文" />
        <FormControlLabel value="苦手な科目:古文" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="古文" />
        <FormControlLabel value="苦手な科目:数学" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="数学" />
        <FormControlLabel value="苦手な科目:英語" control={
          <Radio sx={{color: "#505050",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="英語" />
        <FormControlLabel value="苦手な科目:外国語" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="外国語" />
        <FormControlLabel value="苦手な科目:理科" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="理科" />
        <FormControlLabel value="苦手な科目:化学" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="化学" />
        <FormControlLabel value="苦手な科目:物理" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="物理" />
        <FormControlLabel value="苦手な科目:地学" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="地学" />
        <FormControlLabel value="苦手な科目:社会" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="社会" />
        <FormControlLabel value="苦手な科目:日本史" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="日本史" />
        <FormControlLabel value="苦手な科目:世界史" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="世界史" />
        <FormControlLabel value="苦手な科目:公民" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="公民" />
        <FormControlLabel value="苦手な科目:地理" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="地理" />  
        <FormControlLabel value="苦手な科目:美術" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="美術" /> 
        <FormControlLabel value="苦手な科目:体育" control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="体育" />  
      </RadioGroup></FormControl></Stack></Box>

    <Box sx={{ width: "100%", backgroundColor:"#f5f5f5", "&:hover": { backgroundColor:"#eeeeee"},}}>
      <Stack direction="row" spacing={1} paddingLeft="10%" marginRight="10%" paddingTop="4%" paddingBottom="4%" alignItems="center">
        <FormControl><FormLabel id="demo-radio-buttons-group-label" sx={{ color:"#000000",}}>-どのような仕事がしたいですか?-　　　　　　　　　</FormLabel>
          <TextField value={donoyounasigoto} onChange={donoyounasigotoChangeChange} sx={{ borderColor: '#CCCCCC',  '&:hover fieldset': { borderColor: '#DDDDDD',},"& .MuiInputBase-input": { height: 50 }, width:"100%", }} placeholder="文字を入力" multiline rows={3} /></FormControl>
      </Stack></Box>
    
      <Box sx={{ width: "100%", backgroundColor:"#f5f5f5", "&:hover": { backgroundColor:"#eeeeee"},}}>
      <Stack direction="row" spacing={1} paddingLeft="10%" marginRight="10%" paddingTop="4%" paddingBottom="4%" alignItems="center">
        <FormControl><FormLabel id="demo-radio-buttons-group-label" sx={{ color:"#000000",}}>-仕事を通じてどのような人たちと関わりたいですか?-</FormLabel>
          <TextField value={sigotodekakawaritaihito} onChange={sigotodekakawaritaihitoChangeChange} sx={{ borderColor: '#CCCCCC',  '&:hover fieldset': { borderColor: '#DDDDDD',},"& .MuiInputBase-input": { height: 50 }, width:"100%", }} placeholder="文字を入力" multiline rows={3} /></FormControl>
      </Stack></Box>

      <Box sx={{ width: "100%", backgroundColor:"#f5f5f5", "&:hover": { backgroundColor:"#eeeeee"},}}>
      <Stack direction="row" spacing={1} paddingLeft="10%" marginRight="10%" paddingTop="4%" paddingBottom="4%" alignItems="center">
        <FormControl><FormLabel id="demo-radio-buttons-group-label" sx={{ color:"#000000",}}>-働く目的はなんだと思いますか?-　　　　　　　　　</FormLabel>
          <TextField value={hatarakumokuteki} onChange={hatarakumokutekiChangeChange} sx={{ borderColor: '#CCCCCC',  '&:hover fieldset': { borderColor: '#DDDDDD',},"& .MuiInputBase-input": { height: 50 }, width:"100%", }} placeholder="文字を入力" multiline rows={3} /></FormControl>
      </Stack></Box>

    </Box>
);};


    {/* // https://isub.co.jp/react/nextjs/nextjs-checkbox-radio-select/　ラジオボタンのつくりかた
    // https://mui.com/material-ui/react-radio-button/  ラジオボタン公式
    // https://qiita.com/YumaInaura/items/5041c8b3778462148b58　onChangeで関数を送るヒント    */}