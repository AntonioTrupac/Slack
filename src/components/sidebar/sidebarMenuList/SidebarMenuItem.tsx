import { FC, useState } from "react";
import PropTypes from "prop-types";

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

// const AppMenuItem: FC<AppMenuItemProps> = (props) => {
//    const { name, link, Icon, items = [] } = props;
//
//    const isExpandable = items && items.length > 0;
//    const [open, setOpen] = useState<boolean>(false);
// }

