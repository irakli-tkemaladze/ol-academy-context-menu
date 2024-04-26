import { useEffect, useRef, useState } from "react";
import { ContextMenu } from "./contextMenu";
import "./lists.css";

function Lists() {
  const [contextMenu, setContextMenu] = useState(false);
  const [contextMenuOptions, setContextMenuOptions] = useState(null);
  const listsRef = useRef(null);
  const contextMenuRef = useRef(null);

  const lists = [
    {
      name: "list number 1",
      bgColor: "red",
    },
    {
      name: "list number 2",
      bgColor: "yellow",
    },
    {
      name: "list number 3",
      bgColor: "orange",
    },
    {
      name: "list number 4",
      bgColor: "steelblue",
    },
    {
      name: "list number 5",
      bgColor: "green",
    },
  ];

  const handleContextClick = (e, idx) => {
    e.preventDefault();
    setContextMenu(!contextMenu);
    setContextMenuOptions({
      ...lists[idx],
      top: e.clientY,
      left: e.clientX,
    });
  };

  useEffect(() => {
    const handleCancelContextMenu = (e) => {
      if (!contextMenuRef?.current?.contains(e.target)) {
        setContextMenu(false);
      } else {
        e.preventDefault()
      }
    };
    const timeout = setTimeout(() => {
      document.addEventListener("click", handleCancelContextMenu);
      document.addEventListener("contextmenu", handleCancelContextMenu);
    }, 0);

    return function removeListener() {
      clearTimeout(timeout);
      document.removeEventListener("click", handleCancelContextMenu);
      document.removeEventListener("contextmenu", handleCancelContextMenu);
    };
  }, [contextMenu]);

  return (
    <div>
      <ul
        ref={listsRef}
        style={{ backgroundColor: "wheat" }}
        className="ulWrapper"
      >
        {lists.map((item, index) => {
          return (
            <li
              key={index}
              onContextMenu={(e) => handleContextClick(e, index)}
              style={{ backgroundColor: item.bgColor }}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
      {contextMenu && (
        <div ref={contextMenuRef}>
          <ContextMenu
            parentSetContextMenu={setContextMenu}
            contextMenuOptions={contextMenuOptions}
          />
        </div>
      )}
    </div>
  );
}

export { Lists };
