import styled from "styled-components";

export const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;
`

export const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;
  
  > .MuiSvgIcon-root {
    margin-top: 10px;
    padding: 2px;
    color: #49274b;
    font-size: 22px;
    background-color: white;
    border-radius: 999px;
  }
`

export const SidebarInfo = styled.div`
   flex: 1;
  
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
    margin-left: 5px;
  }
  
  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
    margin-left: 2px;
  }
  
  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
    margin-bottom: 1px;
  }
  
`