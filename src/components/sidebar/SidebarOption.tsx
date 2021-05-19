import React, {FC} from "react";
import {SidebarOptionContainer } from "./SidebarOptionStyle";
import { SidbarMenuItems } from "./sidebarMenuList/SidebarMenuList";
import { SideBarMenuItem } from "./sidebarMenuList/SidebarMenuItem";
import {useCollection} from "react-firebase-hooks/firestore";
import {db} from "../../firebase";
import {enterRoom} from "../../redux/appSlice";
import {useDispatch} from "react-redux";

export const SidebarOption: FC = () => {
   const [channels, loading, error] = useCollection(db.collection('rooms'));
   // const dispatch = useDispatch();

   return (
      <>
         <SidebarOptionContainer>
            {SidbarMenuItems.map((items)=> {
               return (
                  <div key={Math.random() * 100}>
                     <SideBarMenuItem {...items} key={Math.random() * 100} />
                  </div>
               )
            })}
            <hr />
            {channels?.docs.map((room) => {
               return (
                  <>
                     <div key={room.id}>
                        <SideBarMenuItem roomChild={`# ${room.data().name}`} id={room.id}/>
                     </div>
                  </>
               )
            })}
         </SidebarOptionContainer>
      </>
   )
}