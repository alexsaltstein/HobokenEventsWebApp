import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import { GenericInput } from "./GenericInput";
import Checkbox from "./Checkbox";
import DaySelect from "./DaySelect";
import { IdIcon } from "../icons/Icons";
import "./formStyle.css";
import axios from "axios";
import { DAYS_ENUM } from "../../utils/common";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { ErrorText } from "../form/ErrorText";
import { groupedTags } from "../../constants/formTags";
export const EditDeal = () =>  {
    const { id } = useParams();
    const [deal, setDeal] = useState(null)
    /**
     * Retrieves a deal from the API based on the given ID.
     *
     * @return {Object|null} The deal object if it exists, otherwise null.
     */
    const getDeal = async (id) => {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/deal/${id}`);
        if(res.data) {
            setDeal(res.data)
            return res.data;
        } 
        return null
    }

    React.useEffect(() => {
        const fetchDeal = async () => {
          await getDeal(id);
        };
    
        fetchDeal();
      }, [id]);

    console.log(deal)
    // Use the eventData in your component
    // For example:
    return (
        <>
        
        </>
    );
    

}
