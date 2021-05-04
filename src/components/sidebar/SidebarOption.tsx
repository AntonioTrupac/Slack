import {FC, ReactNode} from "react";
import { SidebarOptionContainer, SidebarOptionChannel } from "./SidebarOptionStyle";
import { SvgIconProps } from "@material-ui/core";
import { SidbarMenuItems } from "./sidebarMenuList/SidebarMenuList";
import { SideBarMenuItem } from "./sidebarMenuList/SidebarMenuItem";



export const SidebarOption: FC = () => {

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
         </SidebarOptionContainer>
      </>
   )
}