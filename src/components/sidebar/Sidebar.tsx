import {FC} from "react";
import { SidebarContainer, SidebarHeader, SidebarInfo } from "./SidebarStyle";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import {Create, InsertComment, Inbox, Drafts, BookmarkBorder, FileCopy, PeopleAlt, Apps, ExpandLess, ExpandMore } from "@material-ui/icons";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import { SidebarOption } from "./SidebarOption";

export const Sidebar: FC = () => {
   return(
      <>
         <SidebarContainer>
            <SidebarHeader>
                  <SidebarInfo >
                     <h2>Antonio HQ</h2>
                     <h3>
                        <FiberManualRecordIcon />
                        Antonio Trupac
                     </h3>
                  </SidebarInfo>
                  <Create />
            </SidebarHeader>
            <SidebarOption />
            <hr />
         </SidebarContainer>
      </>
   )
}