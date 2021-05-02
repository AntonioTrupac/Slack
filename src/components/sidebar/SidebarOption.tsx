import {FC, ReactNode} from "react";
import { SidebarOptionContainer, SidebarOptionChannel } from "./SidebarOptionStyle";
import { SvgIconProps } from "@material-ui/core";
import { SidbarMenuItems } from "./sidebarMenuList/SidebarMenuList";

type SidebarOptionProps = {
   Icon?: (props: SvgIconProps) => JSX.Element;
   title?: string;
}

export const SidebarOption: FC<SidebarOptionProps> = ({Icon, title}) => {
   return (
      <>
         <SidebarOptionContainer >
            {/*{Icon && (<Icon fontSize="small" style={{padding: 10}} />)}*/}
            {/*{Icon ? (*/}
            {/*   <h3>{title}</h3>*/}
            {/*) : (*/}
            {/*   <SidebarOptionChannel>*/}
            {/*      <span>#</span> {title}*/}
            {/*   </SidebarOptionChannel>*/}
            {/*)}*/}
            {/*{SidbarMenuItems.map((items)=> {*/}
            {/*   return (*/}
            {/*      <div key={Math.random() * 100}>*/}
            {/*         /!*<SidebarMenuItem {...items} key={Math.random() * 100}/>*!/*/}
            {/*      </div>*/}
            {/*   )*/}
            {/*})}*/}
         </SidebarOptionContainer>
      </>
   )
}