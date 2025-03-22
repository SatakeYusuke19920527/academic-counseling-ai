//JSONがわかんない
'use client';
import Link from 'next/link';
import React, { useState } from "react";
import { Stack } from '@mui/material';
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { TextField, Box, Button } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';


export default function Home() {
    const [newTokuinakoto, setNewTokuinakoto] = useState("");
    const [tokuinakoto, setTokuinakoto] = useState<string>("");
    const [basyoChange, setBasyoChange] = useState("");
    const [newBasyoChange, setNewBasyoChange] = useState("");
    const [rikeibunkeiChange, setRikeibunkeiChange] = useState("");
    const [hensachiChange, setHensachiChange] = useState("");
    const [juunenngoChange, setJuunenngoChange] = useState("");
    const [donnahatarakikataChange, setDonnahatarakikataChange] = useState("");
    const [syuunyuutoyarigaiChange, setSyuunyuutoyarigaiChange] = useState("");
    const [sukinakamokuChange, setSukinakamokuChange] = useState("");
    const [tokuinakamokuChange, setTokuinakamokuChange] = useState("");
    const [nigatenakamokuChange, setNigatenakamokuChange] = useState("");
    const [donoyounasigoto, setDonoyounasigoto] = useState("")
    const [newDonoyounasigoto, setNewDonoyounasigoto] = useState("")
    const [sigotodekakawaritaihito, setSigotodekakawaritaihito] = useState("")
    const [newSigotodekakawaritaihito, setNewSigotodekakawaritaihito] = useState("")
    const [hatarakumokuteki, setHatarakumokuteki] = useState("")
    const [newHatarakumokuteki, setNewHatarakumokuteki] = useState("")
    const [answerChange, setAnswerChange] = useState(""); // まとめた回答を保存
    const [displayValues, setDisplayValues] = useState<string[]>([]); // 各項目を保存
    const [ message, setMessage ] = useState<string>("")
    const [ context, setContent ] = useState<string>('AIの返答')
    

    const basyo = (event: React.ChangeEvent<HTMLInputElement>) => {
        const basyoChangeChange = event.target.value; // 現在の入力値を取得
        setNewBasyoChange(basyoChangeChange); // onigiriChangeを更新
        if (event.target.checked) {
          setBasyoChange((prev) => prev + (prev ? ',' : '志望校の場所は: ') + basyoChangeChange);
          console.log("志望校の場所は:" + basyoChangeChange);
        } else {
          setBasyoChange((prev) => {
            const updatedBasyoChange = prev
              .split(',') // カンマで区切り配列に変換
              .filter((item) => item !== basyoChangeChange) // 外された値を削除
              .join(','); // 配列をカンマ区切りの文字列に戻す
            return updatedBasyoChange;
          });
          console.log("志望校の場所は:" + basyoChangeChange + " を削除");
        }
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
    const tokuinakotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newTokuinakoto = event.target.value; // 現在の入力値を取得
      const tokuinakoto = event.target.value; // 現在の入力値を取得
      setTokuinakoto(newTokuinakoto); 
      setNewTokuinakoto(tokuinakoto);
      console.log("得意なことは:" + newTokuinakoto);
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
      const newDonoyounasigoto = event.target.value; // 現在の入力値を取得
      const donoyounasigoto = event.target.value; // 現在の入力値を取得
      setDonoyounasigoto(newDonoyounasigoto); 
      setNewDonoyounasigoto('どのような仕事がしたいか:' + donoyounasigoto + ',');
      console.log("どのような仕事がしたいか:" + newDonoyounasigoto);
    };
    const sigotodekakawaritaihitoChangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newSigotodekakawaritaihito = event.target.value; // 現在の入力値を取得
      const sigotodekakawaritaihito = event.target.value; // 現在の入力値を取得
      setSigotodekakawaritaihito(newSigotodekakawaritaihito); 
      setNewSigotodekakawaritaihito('仕事で関わりたい人は:' + sigotodekakawaritaihito + ',');
      console.log("仕事で関わりたい人は:" + newSigotodekakawaritaihito);
    };
    const hatarakumokutekiChangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newHatarakumokuteki = event.target.value; // 現在の入力値を取得
      const hatarakumokuteki = event.target.value; // 現在の入力値を取得
      setHatarakumokuteki(newHatarakumokuteki); 
      setNewHatarakumokuteki('働く目的は:' + hatarakumokuteki + ',');
      console.log("働く目的は:" + newHatarakumokuteki);
    };
    const answer = () => {
        // JSONオブジェクトとしてデータを整理
        const jsonData = {
          志望校の場所は: basyoChange,
          理系文系: rikeibunkeiChange,
          目標の偏差値: hensachiChange,
          得意なこと: newTokuinakoto,
          juunenngo: juunenngoChange,
          donnahatarakikata: donnahatarakikataChange,
          syuunyuutoyarigai: syuunyuutoyarigaiChange,
          sukinakamoku: sukinakamokuChange,
          tokuinakamoku: tokuinakamokuChange,
          nigatenakamoku: nigatenakamokuChange,
          donoyounasigoto: newDonoyounasigoto,
          sigotodekakawaritaihito: newSigotodekakawaritaihito,
          hatarakumokuteki: newHatarakumokuteki,
        };
        // JSON を文字列化して保存（インデントを付けて見やすくする）
        const jsonString = JSON.stringify(jsonData, null, 2);
        setAnswerChange(jsonString);
        setMessage(jsonString)
      };
      //AIに送る部分
      const sendMessage = async () => {
    

        // Send message to the OpenAI
        const url = '/api/rag-extra-1';
        console.log('🚀 ~ sendMessage ~ url:', url,process.env.NEXT_PUBLIC_URL);
        const response = await fetch(`${url}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message }),
        });
        
        const  aiMessage  = await response.json();
        const data = typeof aiMessage.aiMessage === 'string' 
            ? aiMessage.aiMessage 
            : JSON.stringify(aiMessage.aiMessage);
        setContent(data);
        
      }; 

return (
  <Box sx={{ backgroundColor:"#",}}>
  <Link href="/" className="mt-4 text-xl text-blue-600 hover: underline">ホーム画面</Link>
  <Box sx={{ width: "100%", backgroundColor:"#f5f5f5", "&:hover": { backgroundColor:"#eeeeee"},}}>
    <Stack direction="row" spacing={1} paddingLeft="10%" paddingRight="10%" paddingTop="4%" paddingBottom="4%" alignItems="center">
    <FormControl>
     <FormGroup aria-labelledby="demo-radio-buttons-group-label" onChange={basyo} row>
     <FormLabel id="demo-radio-buttons-group-label" sx={{ color:"#000000",}}>-志望校の場所は？-</FormLabel>
      <FormControlLabel value="北海道" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="北海道" />
      <FormControlLabel value="青森" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="青森" />
      <FormControlLabel value="秋田" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="秋田" />
      <FormControlLabel value="岩手" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="岩手" />
      <FormControlLabel value="山形" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="山形" />
      <FormControlLabel value="宮崎" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="宮崎" />
      <FormControlLabel value="福島" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="福島" />
      <FormControlLabel value="福島" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="群馬" />
      <FormControlLabel value="栃木" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="栃木" />
      <FormControlLabel value="茨城" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="茨城" />
      <FormControlLabel value="埼玉" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="埼玉" />
      <FormControlLabel value="千葉" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="千葉" />
      <FormControlLabel value="東京" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="東京" />
      <FormControlLabel value="神奈川" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="神奈川" />
      <FormControlLabel value="新潟" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="新潟" />
      <FormControlLabel value="富山" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="富山" />
      <FormControlLabel value="石川" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="石川" />
      <FormControlLabel value="長野" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="長野" />
      <FormControlLabel value="静岡" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="静岡" />
      <FormControlLabel value="山梨" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="山梨" />
      <FormControlLabel value="岐阜" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="岐阜" />
      <FormControlLabel value="愛知" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="愛知" />
      <FormControlLabel value="福井" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="福井" />
      <FormControlLabel value="滋賀" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="滋賀" />
      <FormControlLabel value="三重" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="三重" />
      <FormControlLabel value="和歌山" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="和歌山" />
      <FormControlLabel value="奈良" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="奈良" />
      <FormControlLabel value="京都" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="京都" />
      <FormControlLabel value="大阪" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="大阪" />
      <FormControlLabel value="兵庫" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="兵庫" />
      <FormControlLabel value="鳥取" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="鳥取" />
      <FormControlLabel value="島根" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="島根" />
      <FormControlLabel value="岡山" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="岡山" />
      <FormControlLabel value="広島" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="広島" />
      <FormControlLabel value="山口" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="山口" />
      <FormControlLabel value="香川" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="香川" />
      <FormControlLabel value="徳島" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="徳島" />
      <FormControlLabel value="愛媛" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="愛媛" />
      <FormControlLabel value="高知" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="高知" />
      <FormControlLabel value="福岡" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="福岡" />
      <FormControlLabel value="佐賀" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="佐賀" />
      <FormControlLabel value="長崎" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="長崎" />
      <FormControlLabel value="大分" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="大分" />
      <FormControlLabel value="熊本" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="熊本" />
      <FormControlLabel value="宮崎" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="宮崎" />
      <FormControlLabel value="鹿児島" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="鹿児島" />
      <FormControlLabel value="沖縄" control={<Checkbox sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 35,},}}/>} label="沖縄" />
      </FormGroup></FormControl></Stack></Box>

  <Box sx={{ width: "100%", backgroundColor:"#f5f5f5", "&:hover": { backgroundColor:"#eeeeee"},}}>
    <Stack direction="row" spacing={1} paddingLeft="10%" paddingRight="10%" paddingTop="4%" paddingBottom="4%" alignItems="center">
     <FormControl><FormLabel id="demo-radio-buttons-group-label" sx={{ color:"#000000",}}>-得意なことは何ですか?-　　　　　　　　　　　</FormLabel>
      <TextField value={tokuinakoto} onChange={tokuinakotoChange}
       sx={{ borderColor: '#CCCCCC',  '&:hover fieldset': { borderColor: '#DDDDDD',},"& .MuiInputBase-input": { height: 50 }, width:"100%", }} placeholder="文字を入力" multiline rows={3} /></FormControl>
    </Stack></Box>

  <Box sx={{ width: "100%", backgroundColor:"#f5f5f5", "&:hover": { backgroundColor:"#eeeeee"},}}>
    <Stack direction="row" spacing={1} paddingLeft="10%" paddingTop="4%" paddingBottom="4%" alignItems="center">
     <FormControl><FormLabel id="demo-radio-buttons-group-label" sx={{ color:"#000000",}}>-理系？文系？-</FormLabel>
     <RadioGroup aria-labelledby="demo-radio-buttons-group-label" onChange={rikeibunnkei}>
        <FormControlLabel value="理系," control={
          <Radio sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="理系" />
        <FormControlLabel value="どちらかというと理系," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="どちらかというと理系" />
        <FormControlLabel value="どちらでもない," control={
          <Radio sx={{color: "#505050",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="どちらでもない" />
        <FormControlLabel value="どちらかというと文系," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="どちらかというと文系" />
        <FormControlLabel value="文系," control={
          <Radio sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="文系" />
      </RadioGroup></FormControl></Stack></Box>

  <Box sx={{ width: "100%", backgroundColor:"#f5f5f5", "&:hover": { backgroundColor:"#eeeeee"},}}>
    <Stack direction="row" spacing={1} paddingLeft="10%" paddingTop="4%" paddingBottom="4%" alignItems="center">
     <FormControl><FormLabel id="demo-radio-buttons-group-label" sx={{ color:"#000000",}}>-目標の偏差値は？-</FormLabel>
     <RadioGroup aria-labelledby="demo-radio-buttons-group-label" onChange={hensachi}>
        <FormControlLabel value="目標の偏差値:~40," control={
          <Radio sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="~40" />
        <FormControlLabel value="目標の偏差値:40~45," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="40~45" />
        <FormControlLabel value="目標の偏差値:45~50," control={
          <Radio sx={{color: "#505050",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="45~50" />
        <FormControlLabel value="目標の偏差値:50~55," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="50~55" />
        <FormControlLabel value="目標の偏差値:55~60," control={
          <Radio sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="55~60" />
        <FormControlLabel value="目標の偏差値:60~65," control={
          <Radio sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="60~65" />
        <FormControlLabel value="目標の偏差値:65~70," control={
          <Radio sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="65~70" />
        <FormControlLabel value="目標の偏差値:70~," control={
          <Radio sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="70~" />
      </RadioGroup></FormControl></Stack></Box>

  <Box sx={{ width: "100%", backgroundColor:"#f5f5f5", "&:hover": { backgroundColor:"#eeeeee"},}}>
    <Stack direction="row" spacing={1} paddingLeft="10%" paddingTop="4%" paddingBottom="4%" alignItems="center">
     <FormControl><FormLabel id="demo-radio-buttons-group-label" sx={{ color:"#000000",}}>-10年後どんな生活をおくりたいですか？-</FormLabel>
     <RadioGroup aria-labelledby="demo-radio-buttons-group-label" onChange={juunenngo}>
        <FormControlLabel value="10年後の生活:都会で働いている," control={
          <Radio sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="都会で働いている" />
        <FormControlLabel value="10年後の生活:家族と穏やかに暮らしている," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="家族と穏やかに暮らしている" />
        <FormControlLabel value="10年後の生活:海外で挑戦しているなど," control={
          <Radio sx={{color: "#505050",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="海外で挑戦しているなど" />
      </RadioGroup></FormControl></Stack></Box>

  <Box sx={{ width: "100%", backgroundColor:"#f5f5f5", "&:hover": { backgroundColor:"#eeeeee"},}}>
    <Stack direction="row" spacing={1} paddingLeft="10%" paddingTop="4%" paddingBottom="4%" alignItems="center">
     <FormControl><FormLabel id="demo-radio-buttons-group-label" sx={{ color:"#000000",}}>-どんな仕事をしたいですか？または、どんな働き方をしたいですか？-</FormLabel>
     <RadioGroup aria-labelledby="demo-radio-buttons-group-label" onChange={donnahatarakikata}>
        <FormControlLabel value="どんな仕事をしたい?:安定した仕事," control={
          <Radio sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="安定した仕事" />
        <FormControlLabel value="どんな仕事をしたい?:挑戦的な仕事," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="挑戦的な仕事" />
        <FormControlLabel value="どんな仕事をしたい?:フリーランス," control={
          <Radio sx={{color: "#505050",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="フリーランス" />
        <FormControlLabel value="どんな仕事をしたい?:自営業," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="自営業" />
      </RadioGroup></FormControl></Stack></Box>

  <Box sx={{ width: "100%", backgroundColor:"#f5f5f5", "&:hover": { backgroundColor:"#eeeeee"},}}>
    <Stack direction="row" spacing={1} paddingLeft="10%" paddingTop="4%" paddingBottom="4%" alignItems="center">
     <FormControl><FormLabel id="demo-radio-buttons-group-label" sx={{ color:"#000000",}}>-収入とやりがい、どちらを優先したいですか？-</FormLabel>
     <RadioGroup aria-labelledby="demo-radio-buttons-group-label" onChange={syuunyuutoyarigai}>
        <FormControlLabel value="収入とやりがい、優先したいほう:収入優先," control={
          <Radio sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="収入優先" />
        <FormControlLabel value="収入とやりがい、優先したいほう:どちらかといえば収入優先," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="どちらかといえば収入優先" />
        <FormControlLabel value="収入とやりがい、優先したいほう:どちらでもない," control={
          <Radio sx={{color: "#505050",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="どちらでもない" />
        <FormControlLabel value="収入とやりがい、優先したいほう:どちらかといえばやりがい優先," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="どちらかといえばやりがい優先" />
        <FormControlLabel value="収入とやりがい、優先したいほう:やりがい優先," control={
          <Radio sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="やりがい優先" />
      </RadioGroup></FormControl></Stack></Box>

  <Box sx={{ width: "100%", backgroundColor:"#f5f5f5", "&:hover": { backgroundColor:"#eeeeee"},}}>
    <Stack direction="row" spacing={1} paddingLeft="10%" paddingTop="4%" paddingBottom="4%" alignItems="center">
     <FormControl><FormLabel id="demo-radio-buttons-group-label" sx={{ color:"#000000",}}>-好きな科目は？-</FormLabel>
     <RadioGroup aria-labelledby="demo-radio-buttons-group-label" onChange={sukinakamoku}>
        <FormControlLabel value="好きな科目:国語," control={
          <Radio sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="国語" />
        <FormControlLabel value="好きな科目:現代文," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="現代文" />
        <FormControlLabel value="好きな科目:古文," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="古文" />
        <FormControlLabel value="好きな科目:数学," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="数学" />
        <FormControlLabel value="好きな科目:英語," control={
          <Radio sx={{color: "#505050",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="英語" />
        <FormControlLabel value="好きな科目:外国語," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="外国語" />
        <FormControlLabel value="好きな科目:理科," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="理科" />
        <FormControlLabel value="好きな科目:化学," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="化学" />
        <FormControlLabel value="好きな科目:物理," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="物理" />
        <FormControlLabel value="好きな科目:地学," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="地学" />
        <FormControlLabel value="好きな科目:社会," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="社会" />
       <FormControlLabel value="好きな科目:日本史," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="日本史" />
        <FormControlLabel value="好きな科目:世界史," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="世界史" />
        <FormControlLabel value="好きな科目:公民," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="公民" />
        <FormControlLabel value="好きな科目:地理," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="地理" />  
        <FormControlLabel value="好きな科目:美術," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="美術" /> 
        <FormControlLabel value="好きな科目:体育," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="体育" />  
      </RadioGroup></FormControl></Stack></Box>

  <Box sx={{ width: "100%", backgroundColor:"#f5f5f5", "&:hover": { backgroundColor:"#eeeeee"},}}>
    <Stack direction="row" spacing={1} paddingLeft="10%" paddingTop="4%" paddingBottom="4%" alignItems="center">
     <FormControl><FormLabel id="demo-radio-buttons-group-label" sx={{ color:"#000000",}}>-得意な科目は？-</FormLabel>
     <RadioGroup aria-labelledby="demo-radio-buttons-group-label" onChange={tokuinakamoku}>
        <FormControlLabel value="得意な科目:国語," control={
          <Radio sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="国語" />
        <FormControlLabel value="得意な科目:現代文," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="現代文" />
        <FormControlLabel value="得意な科目:古文," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="古文" />
        <FormControlLabel value="得意な科目:数学," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="数学" />
        <FormControlLabel value="得意な科目:英語," control={
          <Radio sx={{color: "#505050",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="英語" />
        <FormControlLabel value="得意な科目:外国語," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="外国語" />
        <FormControlLabel value="得意な科目:理科," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="理科" />
        <FormControlLabel value="得意な科目:化学," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="化学" />
        <FormControlLabel value="得意な科目:物理," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="物理" />
        <FormControlLabel value="得意な科目:地学," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="地学" />
        <FormControlLabel value="得意な科目:社会," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="社会" />
       <FormControlLabel value="得意な科目:日本史," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="日本史" />
        <FormControlLabel value="得意な科目:世界史," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="世界史" />
        <FormControlLabel value="得意な科目:公民," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="公民" />
        <FormControlLabel value="得意な科目:地理," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="地理" />  
        <FormControlLabel value="得意な科目:美術," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="美術" /> 
        <FormControlLabel value="得意な科目:体育," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="体育" />  
      </RadioGroup></FormControl></Stack></Box>

  <Box sx={{ width: "100%", backgroundColor:"#f5f5f5", "&:hover": { backgroundColor:"#eeeeee"},}}>
    <Stack direction="row" spacing={1} paddingLeft="10%" paddingTop="4%" paddingBottom="4%" alignItems="center">
     <FormControl><FormLabel id="demo-radio-buttons-group-label" sx={{ color:"#000000",}}>-苦手な科目は？-</FormLabel>
     <RadioGroup aria-labelledby="demo-radio-buttons-group-label" onChange={nigatenakamoku}>
        <FormControlLabel value="苦手な科目:国語," control={
          <Radio sx={{color: "#404040",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="国語" />
        <FormControlLabel value="苦手な科目:現代文," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="現代文" />
        <FormControlLabel value="苦手な科目:古文," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="古文" />
        <FormControlLabel value="苦手な科目:数学," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="数学" />
        <FormControlLabel value="苦手な科目:英語," control={
          <Radio sx={{color: "#505050",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="英語" />
        <FormControlLabel value="苦手な科目:外国語," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="外国語" />
        <FormControlLabel value="苦手な科目:理科," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="理科" />
        <FormControlLabel value="苦手な科目:化学," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="化学" />
        <FormControlLabel value="苦手な科目:物理," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="物理" />
        <FormControlLabel value="苦手な科目:地学," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="地学" />
        <FormControlLabel value="苦手な科目:社会," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="社会" />
        <FormControlLabel value="苦手な科目:日本史," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="日本史" />
        <FormControlLabel value="苦手な科目:世界史," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="世界史" />
        <FormControlLabel value="苦手な科目:公民," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="公民" />
        <FormControlLabel value="苦手な科目:地理," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="地理" />  
        <FormControlLabel value="苦手な科目:美術," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="美術" /> 
        <FormControlLabel value="苦手な科目:体育," control={
          <Radio sx={{color: "#4a4a4a",'&.Mui-checked': { color: "#404040",},'& .MuiSvgIcon-root': { fontSize: 50,},}}/>} label="体育" />  
      </RadioGroup></FormControl></Stack></Box>

    <Box sx={{ width: "100%", backgroundColor:"#f5f5f5", "&:hover": { backgroundColor:"#eeeeee"},}}>
      <Stack direction="row" spacing={1} paddingLeft="10%" marginRight="10%" paddingTop="4%" paddingBottom="4%" alignItems="center">
        <FormControl><FormLabel id="demo-radio-buttons-group-label" sx={{ color:"#000000",}}>-どのような仕事がしたいですか?-　　　　　　　　　</FormLabel>
          <TextField value={donoyounasigoto} onChange={donoyounasigotoChangeChange}
           sx={{ borderColor: '#CCCCCC',  '&:hover fieldset': { borderColor: '#DDDDDD',},"& .MuiInputBase-input": { height: 50 }, width:"100%", }} placeholder="文字を入力" multiline rows={3} /></FormControl>
      </Stack></Box>
    
      <Box sx={{ width: "100%", backgroundColor:"#f5f5f5", "&:hover": { backgroundColor:"#eeeeee"},}}>
      <Stack direction="row" spacing={1} paddingLeft="10%" marginRight="10%" paddingTop="4%" paddingBottom="4%" alignItems="center">
        <FormControl><FormLabel id="demo-radio-buttons-group-label" sx={{ color:"#000000",}}>-仕事を通じてどのような人たちと関わりたいですか?-</FormLabel>
          <TextField value={sigotodekakawaritaihito} onChange={sigotodekakawaritaihitoChangeChange}
           sx={{ borderColor: '#CCCCCC',  '&:hover fieldset': { borderColor: '#DDDDDD',},"& .MuiInputBase-input": { height: 50 }, width:"100%", }} placeholder="文字を入力" multiline rows={3} /></FormControl>
      </Stack></Box>

      <Box sx={{ width: "100%", backgroundColor:"#f5f5f5", "&:hover": { backgroundColor:"#eeeeee"},}}>
      <Stack direction="row" spacing={1} paddingLeft="10%" marginRight="10%" paddingTop="4%" paddingBottom="4%" alignItems="center">
        <FormControl><FormLabel id="demo-radio-buttons-group-label" sx={{ color:"#000000",}}>-働く目的はなんだと思いますか?-　　　　　　　　　</FormLabel>
          <TextField value={hatarakumokuteki} onChange={hatarakumokutekiChangeChange}
           sx={{ borderColor: '#CCCCCC',  '&:hover fieldset': { borderColor: '#DDDDDD',},"& .MuiInputBase-input": { height: 50 }, width:"100%", }} placeholder="文字を入力" multiline rows={3} /></FormControl>
      </Stack></Box>

      <Box sx={{ width: "100%", backgroundColor:"#f5f5f5", "&:hover": { backgroundColor:"#eeeeee"},}}>
      <Stack direction="row" spacing={1} paddingLeft="10%" marginRight="10%" paddingTop="4%" paddingBottom="4%" alignItems="center">
        {basyoChange}{rikeibunkeiChange}{hensachiChange}{newTokuinakoto}{juunenngoChange}{donnahatarakikataChange}{syuunyuutoyarigaiChange}{sukinakamokuChange}{tokuinakamokuChange}{nigatenakamokuChange}{newDonoyounasigoto}{newSigotodekakawaritaihito}{newHatarakumokuteki}
      </Stack></Box>

      <Box sx={{ width: "100%", backgroundColor:"#f5f5f5", "&:hover": { backgroundColor:"#eeeeee"},}}>
      <Stack direction="row" spacing={1} paddingLeft="10%" marginRight="10%" paddingTop="4%" paddingBottom="4%" alignItems="center">
        {answerChange}
      </Stack></Box>
      <div>
          <button onClick={answer}>JSONを生成</button>
          <button onClick={sendMessage}>AIに考えてもらう</button>
    
          <h2>✅ JSON 出力</h2>
          <div className='answer_box'>
          <p>{context}</p>
          </div>
        </div>
    </Box>
);};


    {/* // https://isub.co.jp/react/nextjs/nextjs-checkbox-radio-select/　ラジオボタンのつくりかた
    // https://mui.com/material-ui/react-radio-button/  ラジオボタン公式
    // https://qiita.com/YumaInaura/items/5041c8b3778462148b58　onChangeで関数を送るヒント    */}