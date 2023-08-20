import { Inter } from 'next/font/google'
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [message, setMessage] = useState("Loading");
  const [multipliedValue, setMultipliedValue] = useState(0)
  const [numberInput, setNumberInput] = useState(0);
  const date = new Date().toString()

  /**
   * Saves number value from input when it changes
   * @param evt 
   */
  const handleNumberInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setNumberInput(parseInt(evt.target.value));
  };

  /**
   * gets welcome message
   */
  useEffect(() => {
    fetch("http://localhost:5000/api/home").then(
      response => response.json()
    ).then(
      data => {
        console.log(data)
        setMessage(data.message)
      }
    )
  }, [])

  /**
   * makes POST request to BE and set param to BE response
   * @param multipliedValue
   */
  const multiplyByTwo = () => {
    console.log(numberInput)
    fetch("http://localhost:5000/api/multiply", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        "data": numberInput
      }),
    }).then(
      response => response.json()
    ).then(
      data => {
        console.log(data)
        setMultipliedValue(data)
      }
    );
  }


  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className} text-black`}
    >

      <Head>
        <title>Homepage</title>
      </Head>

      <p>{message}</p>

      <div>Last update: {date}</div>

      <div className='flex flex-col items-center gap-4'>
        <br />
        <label className="data-input">input a number:</label>
        <input type="text" id="data-input" onChange={handleNumberInputChange} className='text-black' />
        <button onClick={multiplyByTwo} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>multiply by two</button>
      </div>
      <div>
        <div className='mt-10' id="sent-data-container"> your number x2 is: {multipliedValue} </div>
      </div>
      <br />
      <hr />

    </main>
  )
}
