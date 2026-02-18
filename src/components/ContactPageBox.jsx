import React from "react";

const ContactPageBox = React.forwardRef(
  ({ BoxText, id, className = "", ...props }, ref) => {
    return (
      <div className="form-floating">
        <input
          id={id}
          className={`form-control my-2 my-md-3 my-lg-4 ${className}`}
          placeholder={BoxText}
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
