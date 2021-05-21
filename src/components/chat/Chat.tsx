import React, {FC, useEffect, useRef} from 'react';

//styled comp
import { ChatContainer, Header, HeaderLeft, HeaderRight, ChatMessages, ChatBottom } from "./ChatStyle";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import {useSelector} from "react-redux";
import {selectRoomId} from "../../redux/appSlice";
import {useCollection, useDocument} from "react-firebase-hooks/firestore";
import {db} from "../../firebase";
//component
import {ChatInput} from "./ChatInput";
import { Message } from "./Message";


export const Chat: FC = () => {
   const chatRef = useRef<any>(null);
   const roomId = useSelector(selectRoomId);
   const [roomDetails] = useDocument(
      roomId && db.collection('rooms').doc(roomId)
   );
   const [roomMessage, loading] = useCollection(
      roomId &&
         db.collection('rooms')
         .doc(roomId)
         .collection('messages')
         .orderBy('timestamp', 'asc')
   );

   useEffect(() => {
      if(chatRef && chatRef.current){
         if(typeof chatRef?.current?.scrollIntoView === 'function') {
            chatRef?.current?.scrollIntoView({
               behavior: "smooth"
            });
         }
      }
   }, [roomId, loading])

   // console.log("room details", roomDetails?.data());
   // console.log("room messages", roomMessage);

   return (
      <ChatContainer >
         {roomDetails && roomMessage && (
            <>
               <Header>
                  <HeaderLeft>
                     <h4>
                        <strong>
                           #{roomDetails?.data()?.name}
                        </strong>
                     </h4>
                     <StarBorderOutlinedIcon />
                  </HeaderLeft>
                  <HeaderRight>
                     <p>
                        <InfoOutlinedIcon /> Details
                     </p>
                  </HeaderRight>
               </Header>

               <ChatMessages>
                  {roomMessage?.docs.map( doc => {
                     const { message, timestamp, user, userImage } = doc.data();

                     return(
                        <Message
                           key={doc.id}
                           message={message}
                           timestamp={timestamp}
                           user={user}
                           userImage={userImage}
                        />
                     )
                  })}
                  <ChatBottom ref={chatRef}/>
               </ChatMessages>
               <ChatInput
                  chatRef={chatRef}
                  channelName={roomDetails?.data()?.name}
                  channelId={roomId}
               />
            </>
         )}
      </ChatContainer>
   )
}