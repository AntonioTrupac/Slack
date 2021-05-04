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

//react runtime PropTypes
export const AppMenuItemPropTypes = {
   name: PropTypes.string.isRequired,
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
   id?: number;
}

export const SideBarMenuItem: FC<AppMenuItemProps> = (props) => {
   const { name, link, Icon, items = [], addChannelOption, id } = props;
   const [channels, loading, error] = useCollection(db.collection('rooms'));
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
   }

   const selectChannel = () => {
      console.log("SelectChannel");
      const roomId = channels?.docs.map((room) => {
         return room.id;
      })

      if (roomId) {
         dispatch(enterRoom({
            roomId: roomId
         }))
      }

   }


   //TODO DODAJ HR IZMEDU ADD CHANELL I ONOG IZNAD NJEGA, to nekak sa propsima vjerojatno
   const MenuItemRoot = (
      <>
         <AppMenuItemComponent link={link}>
            <SidebarContent onClick={addChannelOption ? addChannel : selectChannel}>
            {!!Icon && (
               <SidebarIcon>
                  <Icon />
               </SidebarIcon>
            )}
            {Icon ? (
               <h3>{name}</h3>
            ) : (
               <SidebarOptionChannel>
                  <span>#</span> {name}
               </SidebarOptionChannel>
            )}
            </SidebarContent>
         </AppMenuItemComponent>
      </>
   )

   return (
      <>

         {MenuItemRoot}
         {/*<hr />*/}
         {addChannelOption && (
            <>
               <hr />
               {channels?.docs.map((room) => {
                  return (
                     <>
                        <div key={room.id} id={room.id}>
                           <SidebarAddedChannel># {room.data().name}</SidebarAddedChannel>
                        </div >
                     </>
                  )
               })}
            </>
         )}
      </>
   )
}

