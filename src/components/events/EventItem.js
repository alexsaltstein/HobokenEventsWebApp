import React from 'react';
import './eventItem.css';

export const EventItem = ({ eventData }) => {
  const { email, first_name, last_name, avatar } = eventData;

  return (
    <div className="p-1 h-60 mt-5 mb-5">
      <div className="relative md:flex drop-shadow-md transition duration-200 hover:shadow-xl border h-full z-0">
        <div className='absolute w-full h-full left-0 top-0 md:flex md:w-1/3 bg-white'>
          <img src={avatar} alt="Event thumbnail" className="w-full h-full md:w-10/12 md:h-5/6 m-auto" />
        </div>
        <div className='absolute w-full bg-white z-10 h-1/2 left-0 top-32 md:w-2/3 md:h-full md:top-0 md:left-1/3'>
          <div className='flex w-full md:relative md:top-4'>
            <div className='w-1/4 mt-auto mb-auto text-center md:relative md:h-full md:w-full md:text-left'>
              <p className='text-red-700 font-bold md:mr-2 md:absolute md:top-0'>TUES</p>
              <p className='md:absolute md:left-12'>SEP 06</p>
            </div>
            <div className='w-3/4 mt-2 mb-auto pr-4 overflow-hidden text-sm md:absolute md:w-full md:top-6'>
              <p className="font-bold text-base truncate">Event Name</p>
              <p className="truncate">Location</p>
              <p className="truncate">Start Time - End Time</p>
              <p className="max-h-6 md:max-h-24 truncate md:text-ellipsis md:whitespace-normal" id='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut velit accumsan, facilisis dui non, consectetur neque. Aenean sodales euismod purus, sit amet blandit eros dignissim id. Praesent lectus ligula, malesuada ultricies nisi sed, pellentesque iaculis sem. Praesent sit amet purus feugiat, venenatis lectus sed, eleifend felis. In tristique faucibus ullamcorper. Proin faucibus leo et erat dignissim vestibulum. Aenean faucibus, ex convallis porta rhoncus, neque justo feugiat mi, nec eleifend velit ante venenatis neque. Nam dapibus tempus lectus, ac ornare nunc dictum sit amet. Aenean auctor rutrum elit ac placerat. Pellentesque posuere risus vel tincidunt consectetur. Fusce ac sagittis massa. Praesent nisl dolor, fermentum sit amet luctus sed, mattis non nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut elit ex, commodo nec urna at, tincidunt ultrices metus. Sed sed ultricies orci, in gravida tellus.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}