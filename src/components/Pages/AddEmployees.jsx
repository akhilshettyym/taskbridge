import { useEffect, useRef } from "react";
import RemoveEmp from "../Basics/RemoveEmp";

const AddEmployees = ({ employees }) => {

  const prevLengthRef = useRef(0);

  useEffect(() => {
    if (!employees) return;
    if (employees.length > prevLengthRef.current) {
      console.log("New employee added");
    }
    prevLengthRef.current = employees.length;
  }, [employees]);

  return (
    <div className="pb-10">
      {employees.map((empDet, empIndex) => {
        const renderName = `${empDet.firstName} ${empDet.lastName}`;

        return (
          <div
            key={empDet.uuid || empIndex}
            className="bg-[#1B211A] rounded-2xl p-4 mt-5 border border-[#FFDAB3]/30 shadow-inner">
            <div className="bg-[#819A91]/30 py-3 px-5 flex items-center rounded-xl border border-[#EEEFE0]/50">

              <h2 className="w-1/4 text-[#A7C1A8] text-xl font-bold"> {empDet.id} </h2>

              <h2 className="w-1/4 text-[#A7C1A8] text-xl font-bold"> {renderName} </h2>

              <h2 className="w-1/4 text-[#A7C1A8] text-xl font-bold"> {empDet.position} </h2>

              <h2 className="w-1/4 text-[#A7C1A8] text-xl font-bold"> {empDet.email} </h2>

              <RemoveEmp empId={empDet.id} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AddEmployees;