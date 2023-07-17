import React, { useState } from "react";
import axios from "axios";
import { XIcon } from "../icons/Icons";
import { ErrorText } from "../form/ErrorText";
import { LoadingAnimation } from "../icons/LoadingAnimation";
import { DAYS_ENUM } from "../../utils/common";
import { GenericInput } from "../form/GenericInput";
import { IdIcon } from "../icons/Icons";
import { useUserState } from "../../utils/userState";
import { DeleteDeal } from "../../server/deal";
export default function EditModal({ eventData, onDismiss }) {
    const [user] = useUserState();
    const [loading, setLoading] = React.useState(false);
    const { placeId,
        dayOfWeek,
        startTime,
        endTime,
        title,
        deals,
        place,
        verifiedAt,
        _id,
        tags } = eventData
    const [newDeal, setNewDeal] = useState({})
    const [error, setError] = useState('')
    const onClickEditDeal = async () => {
        try {
            if(!newDeal) {
                setError('Please fill fields.')
                return
            }
            await axios.put(`${process.env.REACT_APP_API_URL}/api/deal/edit/${_id}`, {
                ...newDeal
            }, {
                headers: {
                  Authorization: `${user.token}`,
                },
              })
              window.location.reload()
        } catch(e) {
            setError(e)
            console.log(e)
        }
    }

    const onClickDelete = async () => {
        try {
            await DeleteDeal(_id, user);
            window.location.reload()
        } catch(e) {
            console.log(e)
        }
    }
    return (
        <div className="fixed top-0 left-0 w-full h-full z-50">
            <div
                className="absolute top-0 left-0 h-full w-full bg-gray-500 opacity-50 z-30 overflow-hidden"
                onClick={() => onDismiss()}
            />
            {/* <!-- Modal content --> */}
            <div className="flex justify-center ">
                <div
                    id="reportModal"
                    tabIndex="-1"
                    aria-hidden="true"
                    className={`fixed top-1/4 mx-auto h-fit z-50 flex w-fit p-4 overflow-hidden`}
                >
                    <div className="bg-white rounded-lg shadow w-96">
                        {/* <!-- Modal header --> */}
                        <div className="flex items-start justify-between p-4 border-b rounded-t">
                            <h3 className="text-xl font-semibold text-gray-900 pt-1">
                                Edit Deal
                            </h3>
                            <ErrorText error={error} />
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                                onClick={() => onDismiss()}
                            >
                                <XIcon />
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div className="p-6 space-y-2">
                            <GenericInput
                                name="Title"
                                type="text"
                                label="Title"
                                extraProps="w-full"
                                required
                                placeholder="Taco Tuesday"
                                onChange={(e) => setNewDeal({ ...newDeal, title: e.target.value })}
                                icon={<IdIcon />}
                                value={newDeal.title || title}
                            />
                            <GenericInput
                                name="Start Time"
                                type="time"
                                label="Start time"
                                extraProps="w-full"
                                required
                                onChange={(e) => setNewDeal({ ...newDeal, startTime: e.target.value })}
                                placeholder="Taco Tuesday"
                                value={newDeal.startTime || startTime}
                            />
                            <GenericInput
                                name="End Time"
                                type="time"
                                label="End time"
                                extraProps="w-full"
                                required
                                placeholder="Taco Tuesday"
                                onChange={(e) => setNewDeal({ ...newDeal, endTime: e.target.value })}
                                value={newDeal.endTime || endTime}
                            />
                            <GenericInput
                                name="dayOfWeek"
                                type="text"
                                label="Days Of Week"
                                extraProps="w-full"
                                required
                                placeholder=""
                                value={newDeal.dayOfWeek || dayOfWeek}
                                onChange={(e) => setNewDeal({ ...newDeal, dayOfWeek: e.target.value.split(",") })}

                            />
                            <textarea
                                id="description"
                                rows="4"
                                className="block p-2.5 w-full text-sm text-input-label-gray rounded border focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter each deal separated by a comma...&#10;e.g. 3 tacos for $4, $5 tequila shots, $6 margaritas"
                                onChange={(event) =>
                                    setNewDeal({ ...newDeal,
                                        deals: event.target.value.split(",").map((val) => val.trim())
                                })
                                }
                                value={newDeal.deals || deals}
                            />
                            <GenericInput
                                name="tags"
                                type="text"
                                label="Tags"
                                extraProps="w-full"
                                required
                                placeholder=""
                                value={newDeal.tags || tags}
                            />
                            {/* <!-- Modal footer --> */}
                            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
                                <button
                                    className="flex text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    onClick={async () => await onClickEditDeal()}
                                >
                                    Update
                                    {loading ? (
                                        <div className="relative left-2">
                                            <LoadingAnimation />
                                        </div>
                                    ) : null}
                                </button>
                                <button
                                    className="flex text-white bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    onClick={async () => await onClickDelete(_id, user)}
                                >
                                    Delete
                                    {loading ? (
                                        <div className="relative left-2">
                                            <LoadingAnimation />
                                        </div>
                                    ) : null}
                                </button>
                                <button
                                    type="button"
                                    className="text-gray-500 bg-white rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5"
                                    onClick={() => onDismiss()}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
