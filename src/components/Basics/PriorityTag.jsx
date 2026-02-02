import { priorityMsgSpanClass, priorityMsgSpanHigh, priorityMsgSpanMedium, priorityMsgSpanLow } from "../../constants/imports";

const PriorityTag = ({ priorityMsg }) => {

    if (priorityMsg === "High") {
        return (
            <span className={priorityMsgSpanClass}>
                <span className={priorityMsgSpanHigh}></span> High </span>
        );
    }

    if (priorityMsg === "Medium") {
        return (
            <span className={priorityMsgSpanClass}>
                <span className={priorityMsgSpanMedium}></span> Medium </span>
        );
    }

    if (priorityMsg === "Low") {
        return (
            <span className={priorityMsgSpanClass}>
                <span className={priorityMsgSpanLow}></span> Low </span>
        );
    }

    return null;
};

export default PriorityTag;