import {FC} from "react";
import { HeaderContainer, HeaderLeft, HeaderAvatar, HeaderSearch, HeaderRight } from "./HeaderStyle";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

export const Header: FC = () => {
    return (
        <>
            <HeaderContainer>
            {/*   Header Left */}
               <HeaderLeft>
                  <HeaderAvatar />
                  <AccessTimeIcon />
               </HeaderLeft>
            {/*   Header Search*/}
               <HeaderSearch>
                  <SearchIcon />
                  <input placeholder="Search" />
               </HeaderSearch>
            {/*   Header Right */}
               <HeaderRight >
                  <HelpOutlineIcon />
               </HeaderRight>
            </HeaderContainer>
        </>
    )
}