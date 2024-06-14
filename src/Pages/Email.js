import { useEffect, useRef, useState } from "react";
import { Templates } from "../HTMLtemplates/Templates";
import parse from "html-react-parser";

import { toPng } from "html-to-image";

export const Email = () => {
  const templates = Templates.template1;
  const [primaryText, setPrimaryText] = useState("");
  const [secondaryText, setSecondaryText] = useState("");
  const [buttontext, setButtontext] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [logoimageUrl, setLogoimageUrl] = useState(null);
  const [downloadClicked, setDownloadClicked] = useState(false);

  const elementRef = useRef(null);
  const generateDynamicTemplate = () => {
    let FinalTemplate = templates
      .replace("Earn upto 14% IRR in 62 days", primaryText)
      .replace("with a new Invoice Discounting Deal", secondaryText)
      .replace("Read More", buttontext)
      .replace("https://via.placeholder.com/1080x1299", imageUrl)
      .replace("https://via.placeholder.com/176x77", logoimageUrl);

    return FinalTemplate;
  };

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
 if(downloadClicked){
    setDownloadClicked(false);
    htmlToImageConvert();
 }
}, [downloadClicked])

  // const htmlToImageConvert = () => {
  //     if (!elementRef.current) return;

  //     // Wait for images to load
  //     Promise.all([
  //       loadImage(imageUrl),
  //       loadImage(logoimageUrl)
  //     ]).then(() => {
  //       // Toggle class on image-container
  //       setDownloadClicked(true);
  //       // Convert element to image
  //       toPng(elementRef.current, { cacheBust: false })
  //         .then((dataUrl) => {
  //           const link = document.createElement("a");
  //           link.download = "my-image-name.png";
  //           link.href = dataUrl;
  //           link.click();
  //           setDownloadClicked(false); // Reset download state after download
  //         })
  //         .catch((err) => {
  //           console.error("Error generating image:", err);
  //           setDownloadClicked(false); // Reset download state on error
  //         });
  //     }).catch((err) => {
  //       console.error("Error loading images:", err);
  //       setDownloadClicked(false); // Reset download state on error
  //     });
  //   };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result;
        console.log(imageUrl);
        setImageUrl(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleLogoImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result;
        console.log(imageUrl);
        setLogoimageUrl(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div class="grid grid-cols-1 md:grid-cols-6 ">
      <div className="md:col-span-1 bg-gray-200  ">
        <form>
          <div className="">
            <div>
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Primary Text
              </label>
              <input
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Primary Text"
                required
                value={primaryText}
                onChange={(e) => setPrimaryText(e.target.value)}
              />
            </div>
            <div>
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Secondry Text
              </label>
              <input
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Secondry Text"
                required
                value={secondaryText}
                onChange={(e) => setSecondaryText(e.target.value)}
              />
            </div>
            <div>
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Button Text
              </label>
              <input
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Button Text"
                required
                value={buttontext}
                onChange={(e) => setButtontext(e.target.value)}
              />
            </div>
            <div>
            <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
               Upload Background Image
              </label>
              <div class="flex items-center justify-center w-full">
                <label
                  for="dropzone-file-main"
                  class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span class="font-semibold">Click to upload </span> or drag
                      and drop
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="dropzone-file-main"
                    type="file"
                    class="hidden"
                    onChange={handleImageUpload}
                  />
                </label>
              </div>

              <div class="flex items-center justify-center w-full ">
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
               Upload Logo Image
              </label>
                <label
                  for="dropzone-file-logo"
                  class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span class="font-semibold">Click to upload</span> or drag
                      and drop
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="dropzone-file-logo"
                    type="file"
                    class="hidden"
                    onChange={handleLogoImageUpload}
                  />
                </label>
              </div>
            </div>
            <button
              onClick={()=>setDownloadClicked(true)}
              type="button"
              class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Download Image
            </button>
          </div>
        </form>
      </div>
      <div
        className={` ${
          !downloadClicked ? "image-container w-[1080px] h-[1299px]" : "w-[1080px] h-[1299px]"
        } `}
        ref={elementRef}
      >
        {parse(generateDynamicTemplate())}
      </div>
    </div>
  );
};
