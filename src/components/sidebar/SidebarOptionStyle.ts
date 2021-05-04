import styled from 'styled-components';

export const SidebarOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  justify-content: center;
  margin-top: 15px;
  cursor: pointer;
  
`;

export const SidebarOptionChannel = styled.div`
  margin-right: 20px;
`;

export const SidebarContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > h3 {
    font-weight: 500;
  }
`;

export const SidebarListButton = styled.div`
  > .MuiListItem-button:hover {
    background-color: #340e36;
  }
  
`;

export const SidebarIcon = styled.div`
  display: flex;
  margin-right: 10px;
  margin-top: 1px;
`;

export const SidebarAddedChannel = styled.div`
  
  font-weight: 300;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 25px;
  margin-top: 20px;
`;