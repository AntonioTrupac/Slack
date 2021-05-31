import {FC} from "react";
import { HeaderContainer, HeaderLeft, HeaderAvatar, HeaderSearch, HeaderRight } from "./HeaderStyle";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../firebase";


export const Header: FC = () => {
    const [user]  = useAuthState(auth); //ovo je tako glupo napravljeno jako

    const userPhoto: string = user?.photoURL ?? 'n/a';
    const altName: string = user?.displayName ?? 'n/a';

    return (
        <>
            <HeaderContainer>
               <HeaderLeft>
                     <HeaderAvatar
                        onClick={() => auth.signOut()}
                        alt={altName}
                        src={userPhoto}
                     />
                  <AccessTimeIcon />
               </HeaderLeft>
               <HeaderSearch>
                  <SearchIcon />
                  <input placeholder="Search" />
               </HeaderSearch>
               <HeaderRight >
                  <HelpOutlineIcon />
               </HeaderRight>
            </HeaderContainer>
        </>
    )
}