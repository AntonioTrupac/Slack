import React, { FC, forwardRef } from "react";
import {ListItem} from "@material-ui/core";
import {NavLink, NavLinkProps} from "react-router-dom";

export interface AppMenuItemComponentProps {
   className?: string;
   link?: string | null; //because the InferProps props allows null value
   onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

export const AppMenuItemComponent: FC<AppMenuItemComponentProps> = (props) => {
   const { className, onClick, link, children } = props;

   if(!link || typeof link !== "string") {
      return (
         <ListItem button children={children} onClick={onClick} />
      )
   }

   return (
      <>
         <ListItem
            button
            // className={className}
            children={children}
            component={forwardRef((props: NavLinkProps, ref: any) => <NavLink exact {...props} innerRef={ref} />)}
            to={link}
         />
      </>
   )
}