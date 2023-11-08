import {
    GridColumnMenuContainer,
    GridFilterInputValue,
    GridColumnMenuHideItem,
  } from "@mui/x-data-grid";
  
  function CustomColumnMenu(props) {
  const { hideMenu, currentColumn, open } = props;
  return (
    <GridColumnMenuContainer
      hideMenu={hideMenu}
      currentColumn={currentColumn}
      open={open}
    >
      <GridFilterInputValue onClick={hideMenu} column={currentColumn} />
      <GridColumnMenuHideItem onClick={hideMenu} column={currentColumn} />
    </GridColumnMenuContainer>
  );
}
  
  export default CustomColumnMenu;