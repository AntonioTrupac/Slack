import { FC, useState } from "react";
import PropTypes from "prop-types";
import {AppMenuItemComponent} from "./SidebarMenuItemComponent";

//react runtime PropTypes
export const AppMenuItemPropTypes = {
   name: PropTypes.string.isRequired,
   link: PropTypes.string,
   Icon: PropTypes.elementType,
   items: PropTypes.array,
}

type AppMenuItemPropTypes = PropTypes.InferProps<typeof AppMenuItemPropTypes>
type AppMenuItemPropsWithoutItems = Omit<AppMenuItemPropTypes, 'items'>

//improve child items declaration
export type AppMenuItemProps = AppMenuItemPropsWithoutItems & {
   items?: AppMenuItemProps[]
}

export const SideBarMenuItem: FC<AppMenuItemProps> = (props) => {
   const { name, link, Icon, items = [] } = props;

   const isExpandable = items && items.length > 0;
   const [open, setOpen] = useState<boolean>(false);

   const handleClick = () => {
      setOpen(!open);
   }

   const MenuItemRoot = (
      <>
         <AppMenuItemComponent link={link} onClick={handleClick}>
            {!!Icon && (
               <div>
                  <Icon />
               </div>
            )}
            <span>{name}</span>
         </AppMenuItemComponent>
      </>
   )
   return (
      <>
         {MenuItemRoot}
      </>
   )
}

