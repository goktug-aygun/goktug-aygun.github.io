import React from "react";

const ContactPageBox = React.forwardRef(
  ({ BoxText, id, className = "", ...props }, ref) => {
    return (
      <div className="form-floating contact-field">
        <input
          id={id}
          className={`form-control ${className}`}
          placeholder=" "
          ref={ref}
          {...props}
        />
        <label htmlFor={id} className="form-label">
          {BoxText}
        </label>
      </div>
    );
  },
);

export default ContactPageBox;
