import { FC } from "react";

import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export const SidbarMenuItems = [
   {
      name: "Threads",
      link: "/threads",
      Icon: InsertCommentIcon
   },
   {
      name: "Mentions & reactions",
      link: "/mentions",
      Icon: InboxIcon
   },
   {
      name: "Saved items",
      link: "/savedItems",
      Icon: DraftsIcon
   },
   {
      name: "Channel Browser",
      link: "/channelBrowser",
      Icon: PeopleAltIcon
   },
   {
      name: "People & user groups",
      link: "/Apps",
      Icon: AppsIcon
   },
   {
      name: "File browser",
      link: "/fileBrowser",
      Icon: FileCopyIcon
   },
   {
      name: "ShowLess",
      Icon: ExpandLessIcon
   }
]