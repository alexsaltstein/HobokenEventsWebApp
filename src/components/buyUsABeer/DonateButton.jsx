import React from 'react';
import { Link } from 'react-router-dom';


export const DonateButton = () => {
    return (
      <div>
          <Link to="https://www.paypal.com/donate/?hosted_button_id=LL9SK9JNL2E54">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded m-2">Buy us a Beer! 🍻 </button>
              </Link>
      </div>
    );
  };