// a button child component for app wide use
import { Button } from "@chakra-ui/react";

function ButtonEvent({ onClick, children }) {
  // adding stopPropogation to halt event bubbling up to parent
  return (
    <Button
      // event handler
      // does not have to be pure, great place to change something
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </Button>
  );
}

export default ButtonEvent;
