import React from "react";
import {useState,useEffect} from "react"

export default function Reservations(){
const [phoneNumber,setPhoneNumber]=useState("");
const [name,setName]=useState("");
const [email,setEmail]=useState("");




return(

    <div>
        <input name="phonenumber" type="number" placeholder="enter your phone number" value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}></input>
        <input name="name" type="text" placeholder="enter your name" value={name}
          onChange={(e) => setName(e.target.value)}></input>
        <input name="email" type="text" placeholder="enter your email" value={email}
          onChange={(e) => setEmail(e.target.value)}></input>
        <button name="submit_button" type="submit">book seat</button>
    </div>
);
}