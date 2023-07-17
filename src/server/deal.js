import axios from "axios";

/**
 * Deletes a deal from the API.
 *
 * @param {string} _id - The ID of the deal to be deleted.
 * @return {Promise} A promise that resolves when the delete request is successful.
 */
export const DeleteDeal = async (_id, user) => {
    try{
        await axios.delete(
            `${process.env.REACT_APP_API_URL}/api/deal/${_id}`,
            {
              headers: {
                Authorization: `${user.token}`,
              },
            }
          );
    } catch(e) {
        console.log(e)
    }
}