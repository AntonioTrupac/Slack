import {FC} from "react";
import { SidebarContainer, SidebarHeader, SidebarInfo } from "./SidebarStyle";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { Create } from "@material-ui/icons";
import { SidebarOption } from "./SidebarOption";
import {useCollection} from "react-firebase-hooks/firestore";
import {auth, db} from "../../firebase";
import { SidebarAddedChannel} from "./SidebarOptionStyle";
import {useAuthState} from "react-firebase-hooks/auth";

export const Sidebar: FC = () => {
   const [channels, loading, error] = useCollection(db.collection('rooms'));
   const [user] = useAuthState(auth);


   return(
      <>
         <SidebarContainer>
            <SidebarHeader>
                  <SidebarInfo >
                     <h2>Antonio HQ</h2>
                     <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                     </h3>
                  </SidebarInfo>
                  <Create />
            </SidebarHeader>
            <SidebarOption />
         </SidebarContainer>
      </>
   )
}