import React,{useState} from 'react'

export default function TakeMessage(props){
    const [newMessage,setNewMessage]=useState("")
    function send(){
        props.onSubmit({
            text:newMessage
        })
    }


  return (
    <div>
        <p>
            <input placeholder='Enter message'
                onchange={(e)=>setNewMessage(e.target.value)}/>
        </p>
        <button onClick={send}>Submit</button>
    </div>
  )
  }
