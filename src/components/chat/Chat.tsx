import React, { FC } from 'react';

//styled comp
import { ChatContainer, Header, HeaderLeft, HeaderRight, ChatMessages } from "./ChatStyle";
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
   const roomId = useSelector(selectRoomId);
   const [roomDetails] = useDocument(
      roomId && db.collection('rooms').doc(roomId)
   );
   const [roomMessage] = useCollection(
      roomId &&
         db.collection('rooms')
         .doc(roomId)
         .collection('messages')
         .orderBy('timestamp', 'asc')
   );

   console.log("room details", roomDetails?.data());
   console.log("room messages", roomMessage);

   return (
      <ChatContainer >
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
            </ChatMessages>
            <ChatInput
               channelName={roomDetails?.data()?.name}
               channelId={roomId}
            />
         </>
      </ChatContainer>
   )
}