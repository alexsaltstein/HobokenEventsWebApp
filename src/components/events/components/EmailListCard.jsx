/** @jsxImportSource @emotion/react */
import "twin.macro";
import React, { useState } from "react";
import { IdIcon, MailIcon } from "../../icons/Icons";
import { GenericInput } from "../../form/GenericInput";


export const EmailListCard = () => {
  const [status, setStatus] = useState(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const FORM_URL = `https://api.convertkit.com/v3/forms/${process.env.REACT_APP_CONVERTKIT_FORM_ID}/subscribe`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('api_key', process.env.REACT_APP_CONVERTKIT_API_KEY);
    data.append('first_name', name);
    data.append('email', email);

    try {
      const response = await fetch(FORM_URL, {
        method: "post",
        body: data,
        headers: {
          accept: "application/json",
        },
      })

      setEmail("")

      if (response.status === 200) {
        setStatus("SUCCESS")
        return
      }
    } catch (err) {
      setStatus("ERROR")
      console.log(err)
    }
  }
  
  const handleEmailChange = (e) => {
    const { value } = e.target
    setEmail(value)
  }

  const handleNameChange = (e) => {
    const { value } = e.target
    setName(value)
  }

  return (
    <>
      <form className="fold:max-sm:max-w-screen sm:max-w-lg w-full mb-4 overflow-y-hidden drop-shadow-md" onSubmit={handleSubmit}>
        <div
          className={'bg-sky-100 border-button-blue border p-4 h-full z-30'}
        >
          {status === "SUCCESS" && (
            <div className='flex-col text-button-blue justify-center text-lg text-center font-bold sm:flex-row sm:space-y-0 mb-4'>
              <p className="pb-2">
                Welcome{name ? `, ${name}` : ""}{" "}
              </p>
              <p>Please check your inbox to confirm the subscription!</p>
            </div>
          )}
          {status === "ERROR" && (
            <div className="flex-col text-button-blue justify-center text-lg text-center font-bold sm:flex-row sm:space-y-0 mb-4">
              <p>Oops, something went wrong...</p>
              <p>
                Please,{" "}
                <button onClick={() => setStatus(null)}  class="underline">try again.</button>
              </p>
            </div>
          )}
          {status === null && (
            <>
              <div>
                <h1 className="flex text-button-blue justify-center text-lg text-center font-bold sm:flex-row flex-col-reverse sm:space-y-0 mb-4">
                  Business Owner?
                  <br />
                  Join our mailing list for updates
                </h1>
                <hr className="border-button-blue" />
                <div className="md:whitespace-normal mt-4 mb-4" id="description">
                  <GenericInput
                    name="fields[first_name]"
                    type="text"
                    label="First Name"
                    extraProps="w-full"
                    inputProps={"border-button-blue"}
                    required
                    placeholder="John Doe"
                    icon={<IdIcon />}
                    value={name}
                    onChange={handleNameChange} />
                  <GenericInput
                    name="email_address"
                    type="text"
                    label="Email"
                    extraProps="w-full mt-2 border-blue-200"
                    inputProps={"border-button-blue"}
                    required
                    placeholder="JohnDoe@HudsonHapps.com"
                    icon={<MailIcon />}
                    value={email}
                    onChange={handleEmailChange} />
                  <button
                    className=" text-white bg-button-blue focus:ring-4 w-full focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 my-4 drop-shadow"
                    onClick={null}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="flex justify-between sm:items-center sm:flex-row flex-col">
                <div className="flex items-center space-x-1">
                </div>
              </div>
            </>
          )}
        </div>
      </form>
    </>
  );
};
