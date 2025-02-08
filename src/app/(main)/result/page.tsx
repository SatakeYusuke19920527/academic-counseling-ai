'use client'
import { selectMessage } from '@/features/messageSlice';
import Link from 'next/link';
import React, { use, useState } from "react";


const ResultPage = () => {
  const [message, setMessage] = useState("");
  const [content, setContent] = useState<string>('AIです'); 
  const url ='api/azOpenAI?message=${encodeURIComponent(sendtext)}'

  // const getAzData = async () => {
    
  //   try {
  //     console.log('start',sendtext);
      
  //     // const response = await fetch(`/api/azOpenAI?message=${encodeURIComponent(sendtext)}`);
  //     const response = await fetch(`${url}`,{
  //         method: 'GET',
  //         headers:{
  //           'Content-Type':'application/json'
  //         }
  //     }
  //     )
  //     if (response.status !== 200) throw new Error('Failed to fetch tasks');
  //       const data = await response.json();
  //       console.log('途中 data : ', data);
  //       setContent(data[0].message.content); 
  //       console.log("終わり");  
  //   } catch (err) {
  //       console.log('🚀 ~ file: index.tsx:32 ~ getAzData ~ err:', err);
  //   }
  // }

  const sendMessage = async () => {
    

    // Send message to the OpenAI
    const url = '/api/rag-extra-1';
    console.log('🚀 ~ sendMessage ~ url:', url,process.env.NEXT_PUBLIC_URL);
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}${url}`, {
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
    <div>
      <h2>Result Page</h2>
      <p>result</p>
      <input onChange={(e) => ( setMessage(e.target.value) )}></input>
      <button onClick={sendMessage}>push to question</button>
      <p>AI結果:{content}</p>
      <Link href="/">Back to Main Page</Link>
    </div>
  );
};

export default ResultPage;