import React, { useEffect, useRef, useState } from "react";
import parse from "html-react-parser";
import { toPng } from "html-to-image";
import { CardContainer } from "../Components/CardContainer";

export const DailyDealsCreative = () => {
  const [selectedValue, setSelectedValue] = useState('3');
  const [downloadClicked, setDownloadClicked] = useState(false);
  const [minimumInvestments, setMinimumInvestments] = useState(["50,000", "50,000", "50,000"]);

  const elementRef = useRef(null);

  const htmlToImageConvert = () => {
    toPng(elementRef.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (downloadClicked) {
      setDownloadClicked(false);
      htmlToImageConvert();
    }
  }, [downloadClicked]);

  const handleInvestmentChange = (index, value) => {
    const updatedInvestments = [...minimumInvestments];
    updatedInvestments[index] = value;
    setMinimumInvestments(updatedInvestments);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-6">
      <div className="md:col-span-2">
        <form>
          <div className="flex justify-between m-8">
            <div className="flex align-middle font-semibold uppercase">
              Creative Template
            </div>
            <button
              onClick={() => setDownloadClicked(true)}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Download Image
            </button>
          </div>

          <div>
            <label htmlFor="cardNumber">Number of Cards:</label>
            <select
              id="cardNumber"
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
            >
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          {[...Array(parseInt(selectedValue)).keys()].map((index) => (
            <div key={index}>
              <label
                htmlFor={`minInvestment${index}`}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
              >
                Enter Minimum Investment for Card {index + 1}
              </label>
              <input
                type="number"
                id={`minInvestment${index}`}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Minimum Investment"
                required
                value={minimumInvestments[index]}
                onChange={(e) => handleInvestmentChange(index, e.target.value)}
              />
            </div>
          ))}
        </form>
      </div>
      <div className="image-container w-[350px] h-[1299px]" ref={elementRef}>
        <CardContainer selectedValue={selectedValue} minimumInvestments={minimumInvestments} />
      </div>
    </div>
  );
};
