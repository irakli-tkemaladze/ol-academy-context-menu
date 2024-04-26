import "./contextMenu.css";
import { useRef, useEffect } from "react";
function ContextMenu({ listsRef, parentSetContextMenu, contextMenuOptions }) {
  return (
    <div
      style={{
        top: contextMenuOptions.top,
        left: contextMenuOptions.left,
        backgroundColor: contextMenuOptions.bgColor,
      }}
      className="contextMenuWrapper"
    >
      <h3>{contextMenuOptions.name}</h3>
      <div className="btnContainer">
        <button
          style={{ backgroundColor: "yellow" }}
          onClick={() => {
            console.log("edit: ", contextMenuOptions.name);
            parentSetContextMenu(false);
          }}
        >
          edit
        </button>
        <button
          style={{ backgroundColor: "red" }}
          onClick={() => {
            console.log("delete: ", contextMenuOptions.name);
            parentSetContextMenu(false);
          }}
        >
          delete
        </button>
      </div>
    </div>
  );
}

export { ContextMenu };
