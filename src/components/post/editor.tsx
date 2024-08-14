"use client";

import JoditEditor from "jodit-react";
import { useMemo, useRef, useState } from "react";

const options = [
  "bold",
  "italic",
  "|",
  "ul",
  "ol",
  "|",
  "font",
  "fontsize",
  "|",
  "outdent",
  "indent",
  "align",
  "|",
  "hr",
  "|",
  "fullsize",
  "brush",
  "|",
  "table",
  "link",
  "|",
  "undo",
  "redo",
];

const Editor = () => {
  const ref = useRef(null);
  const [value, setValue] = useState("");

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "",
      defaultActionOnPaste: "insert_as_html",
      defaultLineHeight: 1.5,
      enter: "div",
      // options that we defined in above step.
      buttons: options,
      buttonsMD: options,
      buttonsSM: options,
      buttonsXS: options,
      statusbar: false,
      sizeLG: 900,
      sizeMD: 700,
      sizeSM: 400,
      toolbarAdaptive: false,
    }),
    [options]
  );

  console.log(value);

  return (
    <JoditEditor
      ref={ref}
      value={value || ""}
      onChange={(htmlString) => setValue(htmlString)}
    />
  );
};

export default Editor;
