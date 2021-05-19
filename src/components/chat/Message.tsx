import React, { FC } from 'react';

import { MessageContainer} from "./MessageStyle";

type MessageProps = {
   message?: string;
   timestamp?: string;
   user?: string;
   userImage?: string;
}

export const Message: FC<MessageProps> = (props) => {
   return (
      <MessageContainer >
         YO
      </MessageContainer>
   )
}

