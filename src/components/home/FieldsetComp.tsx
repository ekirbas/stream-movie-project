import React, { useEffect, useState } from "react";
import { FieldsetCompType } from "../../models/homeType";

const FieldsetComp = (props: FieldsetCompType) => {
  const { title, children } = props;
  const [pageWidth, setPageWidth] = useState<number>(outerWidth);
  useEffect(() => {
    setPageWidth(outerWidth);
  }, []);
  if (pageWidth > 390) {
    return (
      <fieldset className="fieldS">
        <legend>
          <div className="title">{title}</div>
        </legend>
        {children}
      </fieldset>
    );
  }
  return children;
};

export default FieldsetComp;
