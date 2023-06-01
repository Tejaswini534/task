import React,{useState} from 'react'
import TakeMessage from './TakeMessage'
import DisplayMessage from './DisplayMessage'

export default function MessageList() {
    const [messageList,setMessageList]=useState([])
    function add(s){
        setMessageList([...messageList,s])

    }
  return (
    <div>
        <TakeMessage onSubmit={add}/>
        {
             messageList.map((m)=>(
                <DisplayMessage key={m.text} showMessage={m.text}/>
             ))
        }
    </div>
  )
}
