import React from 'react';
import { Link } from 'react-router-dom';


export const DonateButton = () => {
    return (
      <div>
          <Link to="https://www.paypal.com/donate/?hosted_button_id=LL9SK9JNL2E54">
              <p className='mt-3 text-white hover:text-gray-200 md:border-0 md:p-0'>Buy us a Beer! 🍻 </p>
              </Link>
      </div>
    );
  };