import React from "react";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transfrom: "translate(-50%, -50%)",
  backgroundColor: "#fff",
  padding: "50px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,.7)",
  zIndex: 1000,
};

function Modal(props) {
  const { child, open, onClose } = props;

  if (!open) return null;

  return (
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button onClick={onClose}>&times</button>
        <h1>{child}</h1>
      </div>
    </>
  );
}

export default Modal;
