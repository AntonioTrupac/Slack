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
import AddIcon from "@material-ui/icons/Add";


export const SidbarMenuItems = [
   {
      name: "Threads",
      link: "/threads",
      Icon: InsertCommentIcon,
      addChannelOption: false
   },
   {
      name: "Mentions & reactions",
      link: "/mentions",
      Icon: InboxIcon,
      addChannelOption: false
   },
   {
      name: "Saved items",
      link: "/savedItems",
      Icon: DraftsIcon,
      addChannelOption: false
   },
   {
      name: "Channel Browser",
      link: "/channelBrowser",
      Icon: BookmarkBorderIcon,
      addChannelOption: false
   },
   {
      name: "People & user groups",
      link: "/people",
      Icon: PeopleAltIcon,
      addChannelOption: false
   },
   {
      name: "Apps",
      link: "/apps",
      Icon: AppsIcon,
      addChannelOption: false
   },
   {
      name: "File browser",
      link: "/fileBrowser",
      Icon: FileCopyIcon,
      addChannelOption: false
   },
   {
      name: "ShowLess",
      Icon: ExpandLessIcon,
      addChannelOption: false
   },
   {
      name:"Channel",
      Icon: ExpandMoreIcon,
      addChannelOption: false
   },
   {
      name: "Add Channel",
      Icon: AddIcon,
      addChannelOption: true
   }
]