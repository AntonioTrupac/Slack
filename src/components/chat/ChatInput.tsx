import React, {FC, useState} from 'react';
//styled compo
import {ChatInputContainer} from "./ChatInputStyle";
import {Button} from "@material-ui/core";
import {db} from "../../firebase";
import firebase from 'firebase';


type ChatInputProps = {
   channelName?: string;
   channelId: string | null;
   chatRef?: any;
}

export const ChatInput: FC<ChatInputProps> = (props) => {
  const [input, setInput] = useState<string>("");

  const sendMessage=(e: any) => {
     e.preventDefault();

     if (!props.channelId) {
        return false;
     }

     db.collection('rooms').doc(props.channelId).collection('messages').add({
           message: input,
           timestamp: firebase.firestore.FieldValue.serverTimestamp(),
           user: 'Antonio Trupac',
           userImage: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Arrow-right-small.svg'
     })
     //kad se posalje poruka
     if(props.chatRef && props.chatRef.current){
        if(typeof props.chatRef?.current?.scrollIntoView === 'function') {
           props.chatRef?.current?.scrollIntoView({
              behavior: "smooth"
           });
        }
     }

     setInput("");
  }

   return (
      <ChatInputContainer>
         <form>
            <input
               value={input}
               onChange={(e) => setInput(e.target.value)}
               placeholder={`Message #${props.channelName}`}
            />
            <Button hidden type='submit' onClick={sendMessage}>
               Send
            </Button>
         </form>
      </ChatInputContainer>
   )
}