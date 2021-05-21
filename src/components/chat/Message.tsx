import React, { FC } from 'react';

import { MessageContainer, MessageInfo } from "./MessageStyle";

type MessageProps = {
   message?: string;
   timestamp: any ;
   user?: string;
   userImage?: string;
}

export const Message: FC<MessageProps> = (props) => {
   return (

      <MessageContainer >
         <img src={props.userImage} alt="user" />
         <MessageInfo>
            <h4>
               {props.user}{" "}
               <span>
                  {new Date(props.timestamp?.toDate()).toUTCString()}
               </span>
            </h4>
            <p>{props.message}</p>
         </MessageInfo>
      </MessageContainer>
   )
}

