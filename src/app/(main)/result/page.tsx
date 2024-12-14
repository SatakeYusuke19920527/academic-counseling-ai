'use client'
import Link from 'next/link';
import React, { use, useState } from "react";


const ResultPage = () => {
  const [text, setText] = useState("");
  const [content, setContent] = useState<string>('AIです');
  const sendtext = text 

  const getAzData = async () => {
    
    try {
      console.log('start',sendtext);
      const baseURL = process.env.NODE_ENV;
      console.log(baseURL)
      const response = await fetch(`/api/azOpenAI?message=${encodeURIComponent(sendtext)}`);
      console.log(response)
      if (response.status !== 200) throw new Error('Failed to fetch tasks');
        const data = await response.json();
        console.log('途中 data : ', data);
        setContent(data[0].message.content); 
        console.log("終わり");  
    } catch (err) {
        console.log('🚀 ~ file: index.tsx:32 ~ getAzData ~ err:', err);
    }
  }

  return (
    <div>
      <h2>Result Page</h2>
      <p>result</p>
      <input onChange={(e) => ( setText(e.target.value) )}></input>
      <button onClick={getAzData}>push to question</button>
      <p>AI結果:{content}</p>
      <Link href="/">Back to Main Page</Link>
    </div>
  );
};

export default ResultPage;