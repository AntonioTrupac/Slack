import React, { FC, useState } from "react";
import PropTypes from "prop-types";
import {AppMenuItemComponent} from "./SidebarMenuItemComponent";
import {
   SidebarOptionChannel,
   SidebarIcon,
   SidebarContent,
   SidebarAddedChannel,
} from "../SidebarOptionStyle";
import { db } from "../../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useDispatch } from "react-redux";
import {enterRoom} from "../../../redux/appSlice";
import firebase from "firebase";
import {ListItem} from "@material-ui/core";

//react runtime PropTypes
export const AppMenuItemPropTypes = {
   name: PropTypes.string,
   link: PropTypes.string,
   Icon: PropTypes.elementType,
   items: PropTypes.array,
   addChannelOption: PropTypes.bool
}

type AppMenuItemPropTypes = PropTypes.InferProps<typeof AppMenuItemPropTypes>
type AppMenuItemPropsWithoutItems = Omit<AppMenuItemPropTypes, 'items'>

//improve child items declaration
export type AppMenuItemProps = AppMenuItemPropsWithoutItems & {
   items?: AppMenuItemProps[],
   addChannelOption?: boolean;
   id?: string;
   onClick?: () => void;
   roomChild?: string
}

export const SideBarMenuItem: FC<AppMenuItemProps> = (props) => {
   const { name, link, Icon, items = [], addChannelOption, id, roomChild } = props;
   const [channels, loading, error] = useCollection(db.collection('rooms'));
   const [isChannel, setChannel] = useState(false);
   const dispatch = useDispatch();

   const addChannel = () => {
      console.log("Add channel");
      //tu inace treba dodati neki modal i onda unutar tog modala mos dodat kao channel
      const channelName = prompt('Please enter the channel name');

      if (channelName) {
         db.collection('rooms').add({
            name: channelName,
         })
      }
      setChannel(true);
   }

   const selectChannel = () => {

      console.log("SelectChannel", id);
      if (id) {
         dispatch(enterRoom({
            roomId: id
         }))
      }
   }

   const doNothing = () => {
      console.log("DO NOTHING");
   }


   //TODO DODAJ HR IZMEDU ADD CHANELL I ONOG IZNAD NJEGA, to nekak sa propsima vjerojatno
   const MenuItemRoot = (
      <>
         <AppMenuItemComponent link={link}>
            <SidebarContent onClick={addChannelOption ? addChannel : doNothing}>
            {!!Icon && (
               <SidebarIcon>
                  <Icon />
               </SidebarIcon>
            )}
            {Icon && (
               <h3>{name}</h3>
            )}
            </SidebarContent>
         </AppMenuItemComponent>
      </>
   )
   // to tu je onaj dio di je samo padding smrdan
   const AddedChannels =  (
      <>
         <div onClick={selectChannel} key={id} id={id}>
            <SidebarAddedChannel>{roomChild}</SidebarAddedChannel>
         </div>
      </>
   )


   return (
      <>
         {MenuItemRoot}
         {AddedChannels}
      </>
   )
}

