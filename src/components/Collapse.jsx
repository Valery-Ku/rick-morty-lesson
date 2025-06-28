import { useState } from "react";

export const Collapse = ({ className, title, content, style }) => {
  const [open, setOpen] = useState(false);

  const toggle = (event) => {
    event.stopPropagation();
    setOpen((prev) => !prev);
  };

  return (
    <div className={className} onClick={toggle} style={style}>
      <h3>{title}</h3>
      {open && content}
    </div>
  );
};
