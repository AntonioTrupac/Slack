import { FC, useState } from "react";
import PropTypes from "prop-types";
import {AppMenuItemComponent} from "./SidebarMenuItemComponent";
import { SidebarOptionChannel, SidebarIcon, SidebarContent } from "../SidebarOptionStyle";

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
}

export const SideBarMenuItem: FC<AppMenuItemProps> = (props) => {
   const { name, link, Icon, items = [], addChannelOption } = props;

   const addChannel = () => {
      console.log("hey");
   }

   const selectChannel = () => {
      console.log("hello");
   }

   const isExpandable = items && items.length > 0;
   const [open, setOpen] = useState<boolean>(false);

   const handleClick = () => {
      setOpen(!open);
   }
   //TODO DODAJ HR IZMEDU ADD CHANELL I ONOG IZNAD NJEGA, to nekak sa propsima vjerojatno
   const MenuItemRoot = (
      <>
         <AppMenuItemComponent link={link} onClick={handleClick}>
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

      </>
   )
}

