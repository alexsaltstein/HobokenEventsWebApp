import React from "react";

export default function ReportModal({show, onClickReport, reportedDeal, reportedPlace}) {
    return (
        <div id="reportModal" tabindex="-1" aria-hidden="true" class={`fixed top-1/4 left-0 z-50 ${show ? 'flex' : 'hidden' } w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 md:h-full`}>
            <div class="relative my-auto mx-auto w-full h-full max-w-2xl md:h-auto">
            {/* <!-- Modal content --> */}
                <div class="relative bg-white rounded-lg shadow">
                    {/* <!-- Modal header --> */}
                    <div class="flex items-start justify-between p-4 border-b rounded-t">
                        <h3 class="text-xl font-semibold text-gray-900">
                            Report {reportedDeal} by {reportedPlace}?
                        </h3>
                        <button type="button" class="text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" onClick={() => onClickReport(false)}>
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <div class="p-6 space-y-2">
                        <label for="countries" class="block mb-1 text-sm font-medium text-gray-900">What's the problem with this deal?</label>
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                            <option selected>Choose an issue...</option>
                            <option value="Deal NA">Deal no longer available</option>
                            <option value="Deal Wrong">Deal wrong/changed</option>
                            <option value="Location Closed">Location permanantly closed</option>
                        </select>
                    </div>
                    {/* <!-- Modal footer --> */}
                    <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
                        <button type="button" class="text-white bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Report</button>
                        <button type="button" class="text-gray-500 bg-white rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5" onClick={() => onClickReport(false)}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}