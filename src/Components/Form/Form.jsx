import React from "react";

const Form = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white py-6 flex flex-col justify-center sm:py-4">
      <div className="px-4 py-5 bg-gray-900 shadow-lg sm:rounded-3xl sm:p-4 flex justify-center items-center">
        <div className="">
          <div className="text-center">
            <h1 className="text-5xl font-semibold">CyberIce</h1>
            <p className="pt-5 text-xl"> Incident Form</p>
          </div>
          <div className="py-8 text-base leading-6 space-y-4 text-gray-300 sm:text-lg sm:leading-7">
            <form>
              <div className="flex flex-row gap-6">
                <div className="flex flex-col md:flex-col">
                  <input
                    className="block border border-gray-200 p-3 rounded mb-4"
                    type="text"
                    name="threatType"
                    placeholder="Threat Type"
                  />
                  <input
                    className="block border border-gray-200 p-3 rounded mb-4"
                    type="text"
                    name="threatLevel"
                    placeholder="Threat Level"
                  />
                  <input
                    className="block border border-gray-200 p-3 rounded mb-4"
                    type="datetime-local"
                    name="incidentDateTime"
                    placeholder="Incident Date & Time"
                  />

                  <textarea
                    className="block border border-gray-200 p-3 rounded mb-4"
                    name="incidentDescription"
                    placeholder="Incident Description"
                  ></textarea>
                </div>
                <div className="flex flex-col md:flex-col">
                  <input
                    className="block border border-gray-200 p-3 rounded mb-4"
                    type="text"
                    name="affectedSystems"
                    placeholder="Affected Systems"
                  />
                  <input
                    className="block border border-gray-200 p-3 rounded mb-4"
                    type="text"
                    name="detectionMethod"
                    placeholder="Detection Method"
                  />
                  <input
                    className="block border border-gray-200 p-3 rounded mb-4"
                    type="text"
                    name="incidentStatus"
                    placeholder="Incident Status"
                  />
                  <input
                    className="block border border-gray-200 p-3 rounded mb-4"
                    type="file"
                    name="incidentReport"
                  />
                </div>
              </div>
              <button className="block w-full p-3 rounded bg-blue-600 text-white font-bold hover:bg-blue-500">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
