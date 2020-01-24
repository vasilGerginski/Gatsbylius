import React from "react";
import { Transition } from "react-transition-group";

const duration = 300;

const defaultStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "450px",
  maxWidth: "100%",
  padding: "0.5rem",
  transition: `transform ${duration}ms ease-in-out`,
  transform: `translateX(-350px)`,
  background: "white",
  zIndex: 200,
};

const transitionStyles = {
  entering: { transform: `translateX(0)` },
  entered: { transform: `translateX(0)` },
  exiting: { transform: `translateX(-350px)` },
  exited: { transform: `translateX(-350px)` },
};

const SlideMenu = ({ isOpen, children }) => (
  <Transition in={isOpen} timeout={duration}>
    {state => (
      <div
        style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}
      >
        {children}
      </div>
    )}
  </Transition>
);

export default SlideMenu;
