import { React } from "react";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="flex items-center w-full max-w-xl border mx-auto p-2 rounded-md mb-2">
      <div>
        {" "}
        <i className="fa fa-user-circle text-3xl mr-2" aria-hidden="true"></i>
      </div>
      <div className="w-full">
        <div>{name}</div>
        <div>
          <div>{email}</div>
        </div>
      </div>
      <div className="flex justify-end">
        <i
          className="fa fa-trash text-2xl"
          style={{ color: "red" }}
          aria-hidden="true"
          onClick={() => {
            props.deleteHandler(email);
          }}
        ></i>
      </div>
    </div>
  );
};

export default ContactCard;
