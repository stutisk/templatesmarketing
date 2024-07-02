import React, { useEffect, useRef, useState } from "react";
import { toPng } from "html-to-image";
import { CardContainer } from "../Components/CardContainer";

export const DailyDealsCreative = () => {
  const [selectedValue, setSelectedValue] = useState("3");
  const [downloadClicked, setDownloadClicked] = useState(false);
  const [minimumInvestments, setMinimumInvestments] = useState([
    "50,000",
    "50,000",
    "50,000",
  ]);
  const [xirr, setXirr] = useState(["14", "14", "14"]);
  const [multixirr, setMultiXirr] = useState("14");
  const [showMulti, setShowMulti] = useState(false);
  const [multiCardPosition, setMultiCardPosition] = useState("1");
  const [multiCardInvestment, setMultiCardInvestment] = useState("50,000");
  const [multiLogoImageUrl, setMultiLogoImageUrl] = useState(null);
  const [logoImageUrl, setLogoImageUrl] = useState([null, null, null]);
  const [multitenure, setMultiTenure] = useState("6");
  const [tenure, setTenure] = useState("6");
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

  const handleXIRRChange = (index, value) => {
    const updatedXirr = [...xirr];
    updatedXirr[index] = value;
    setXirr(updatedXirr);
  };

  const handleMultiInvestmentChange = (value) => {
    setMultiCardInvestment(value);
    const updatedInvestments = [...minimumInvestments];
    updatedInvestments[parseInt(multiCardPosition) - 1] = value;
    setMinimumInvestments(updatedInvestments);
  };

  const handleMultiXirr = (value) => {
    setMultiXirr(value);
    const updatedXirr = [...multixirr];
    updatedXirr[parseInt(multiCardPosition) - 1] = value;
    setXirr(updatedXirr);
  };

  const handleMultiTenure = (value) => {
    setMultiTenure(value);
    const updatedTenure = [...multitenure];
    updatedTenure[parseInt(multiCardPosition) - 1] = value;
    setXirr(updatedTenure);
  };


  const handleMultiCardPositionChange = (value) => {
    setMultiCardPosition(value);
    if (showMulti) {
      const updatedInvestments = [...minimumInvestments];
      updatedInvestments[parseInt(value) - 1] = multiCardInvestment;
      setMinimumInvestments(updatedInvestments);
    }
  };

  const handleLogoImageUpload = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result;
        const updatedLogoImageUrl = [...logoImageUrl];
        updatedLogoImageUrl[index] = imageUrl;
        setLogoImageUrl(updatedLogoImageUrl);
      };
      reader.readAsDataURL(file);
    }
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
          {/* <label
                  htmlFor="multiInvestment"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
                >
                  Enter Date
                </label>
                <input
                  type="number"
                  id="multiInvestment"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Minimum Investment"
                  required
                  value={primaryText === "Enter Primary Text" ? "" : primaryText}
                onChange={(e) => setPrimaryText(e.target.value)}
                /> */}

          <div className="flex items-center mt-4">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={showMulti}
                onChange={() => setShowMulti(!showMulti)}
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Show Multi Card
              </span>
            </label>
          </div>

          {showMulti && (
            <>
              <div className="mt-4">
                <label htmlFor="multiCardPosition">Multi Card Position:</label>
                <select
                  id="multiCardPosition"
                  value={multiCardPosition}
                  onChange={(e) =>
                    handleMultiCardPositionChange(e.target.value)
                  }
                >
                  {Array.from(
                    { length: parseInt(selectedValue) },
                    (_, index) => (
                      <option key={index} value={index + 1}>
                        {index + 1}
                      </option>
                    )
                  )}
                </select>
              </div>
              <div>
                <label
                  htmlFor="multiInvestment"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
                >
                  Enter Minimum Investment for Multi Card
                </label>
                <input
                  type="number"
                  id="multiInvestment"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Minimum Investment"
                  required
                  value={multiCardInvestment}
                  onChange={(e) => handleMultiInvestmentChange(e.target.value)}
                />

                <label
                  htmlFor="multixirr"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
                >
                  Enter XIRR for Multi Card
                </label>
                <input
                  type="number"
                  id="multixirr"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="xirr"
                  required
                  value={multixirr}
                  onChange={(e) => handleMultiXirr(e.target.value)}
                />

                <label
                  htmlFor="multixirr"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
                >
                  Enter Tenure for Multi Card
                </label>
                <input
                  type="number"
                  id="multitenure"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="tenure"
                  required
                  value={multitenure}
                  onChange={(e) => handleMultiTenure(e.target.value)}
                />
              </div>
            </>
          )}

          {[...Array(parseInt(selectedValue))].map((_, index) => {
            if (showMulti && index === parseInt(multiCardPosition) - 1) {
              return null;
            } else {
              return (
                <div key={index}>
                  <div>Enter Details For Card {index + 1}</div>
                  <label
                    htmlFor={`minInvestment${index}`}
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
                  >
                    Minimum Investment
                  </label>
                  <input
                    type="number"
                    id={`minInvestment${index}`}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Minimum Investment"
                    required
                    value={minimumInvestments[index]}
                    onChange={(e) =>
                      handleInvestmentChange(index, e.target.value)
                    }
                  />

                  <label
                    htmlFor={`xirr${index}`}
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
                  >
                    XIRR
                  </label>
                  <input
                    type="number"
                    id={`xirr${index}`}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="XIRR"
                    required
                    value={xirr[index]}
                    onChange={(e) => handleXIRRChange(index, e.target.value)}
                  />

                  <label
                    htmlFor={`dropzone-file-logo-${index}`}
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
                  >
                    Upload Logo Image
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor={`dropzone-file-logo-${index}`}
                      className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input
                        id={`dropzone-file-logo-${index}`}
                        type="file"
                        className="hidden"
                        onChange={(e) => handleLogoImageUpload(index, e)}
                      />
                    </label>
                  </div>
                </div>
              );
            }
          })}
        </form>
      </div>
      <div
        className={` ${
          !downloadClicked
            ? "image-container imageContainerMulti "
            : " w-[2533px] h-[1423px]"
        } `}
        ref={elementRef}
      >
        <CardContainer
          selectedValue={selectedValue}
          minimumInvestments={minimumInvestments}
          xirr={xirr}
          logoImageUrl={logoImageUrl}
          showMulti={showMulti}
          multiCardPosition={multiCardPosition}
          multiCardInvestment={multiCardInvestment}
         
          multixirr={multixirr}
          multitenure={multitenure}
        />
      </div>
    </div>
  );
};
