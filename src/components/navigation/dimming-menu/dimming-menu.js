import DimmingModeTabs from "./dimming-mode-tabs/dimming-mode-tabs";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  /* left: 0;
    top: 0;
    right: 0;
    bottom: 0; */
  width: 260px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: rgb(241, 241, 241);
  box-shadow: 0 0 1px 0 rgba(24, 94, 224, 0.15),
    0 6px 12px 0 rgba(24, 94, 224, 0.15);
  padding: 0.5rem;
  border-radius: 20px;
`;
function DimmingMenu() {
  return (
    <Container>
      <DimmingModeTabs name="Dimming-Modes" />
      {/* <br />
      <DimmingModeTabs name="Tab2" />
      <br />
      <DimmingModeTabs name="Tab3" />
      <br />
      <DimmingModeTabs name="Tab4" /> */}
    </Container>
  );
}

export default DimmingMenu;
