import React from 'react';

export const EventItem = ({ eventData }) => {
  const { email, first_name, last_name, avatar } = eventData;

  return (
    <div className="p-4">
      <div className="flex flex-row border-b-2 p-2 space-x-4">
        <img src={avatar} alt="Event thumbnail" className="w-20 aspect-square" />
        <div>
          <p className="font-bold">{email}</p>
          <p>{first_name}</p>
          <p>{last_name}</p>
        </div>
      </div>
    </div>
  )
}