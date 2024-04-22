import React, { useRef, useState } from 'react';
import uploadSvg from '../../../assets/vectors/cardIcon/upload.svg';
import { ErrorMessage, Field } from 'formik';

function AddImage({ width = '590px', height = '270px' ,setFieldValue}) {
  const [selectedImage, setSelectedImage] = useState(null);
  const uploadBtn = useRef(null);
  const [img, setImg] = useState(false);
  const [imgErr, setImgErr] = useState(false);
  const dropArea = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        const imageElement = new Image();
        const imageUrl = reader.result?.toString() || "";
        imageElement.src = imageUrl;

        imageElement.addEventListener("load", (e) => {
          const { naturalWidth, naturalHeight } = e.currentTarget;
          if (naturalWidth < 300 || naturalHeight < 300) {
            setImgErr(true);
            
          } else {
            setSelectedImage(imageUrl);
            
            setImgErr(false);
          }
        });
      });

      reader.readAsDataURL(file);
      setImg(true);
    }
  };

  const handleRemoveImage = () => {
    if (uploadBtn.current) {
      uploadBtn.current.value = null;
    }
    setFieldValue('mediaFile', null);
    setSelectedImage(null);
    setImg(false);
     
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    dropArea.current.classList.add('dragover');
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    dropArea.current.classList.remove('dragover');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    dropArea.current.classList.remove('dragover');
    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        const imageElement = new Image();
        const imageUrl = reader.result?.toString() || "";
        imageElement.src = imageUrl;

        imageElement.addEventListener("load", (e) => {
          const { naturalWidth, naturalHeight } = e.currentTarget;
          if (naturalWidth < 300 || naturalHeight < 300) {
            setImgErr(true);
            setSelectedImage("");
          } else {
            setSelectedImage(imageUrl);
            setImgErr(false);
          }
        });
      });

      reader.readAsDataURL(file);
      setImg(true);
    }
  };

  return (
    <>
      
      <input
              type="file"
        id="mediaFile"
        className='hidden'
        name="mediaFile"
        ref={uploadBtn}
        accept='image/*'
              onChange={(event) => {
                setFieldValue('mediaFile', event.currentTarget.files[0]);
                handleImageChange(event)
              }}
            />
      {/* <Field
        name='mediaFile'
        id='mediaFile'
        className='hidden'
        type='file'
        ref={uploadBtn}
        accept='image/*'
        onChange={(event) => {
          setFieldValue('mediaFile', event.currentTarget.files[0]);
        }}
      /> */}
      <div className='text-xl mb-3'>Add Image</div>
      <div
        className={` border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center relative`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        ref={dropArea}
        style={{ height: height, width: width }}
      >
        {selectedImage ? (
          <>
            <img src={selectedImage} alt='Selected Image' style={{ maxWidth: '100%', maxHeight: '100%' }} />
            <button
              className='absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded'
              onClick={handleRemoveImage}
            >
              Remove
            </button>
          </>
        ) : (
          <>
            <div className='p-3 rounded-lg' style={{ backgroundColor: '#ffa007' }}>
              <img src={uploadSvg} alt='Upload Icon' />
            </div>
            <div className='p-4 text-center'>Drag and Drop here<br />or</div>
            <button
              type='button'
              className='px-6 py-1 text-center border-solid border-2 rounded-xl hover:bg-gray-100'
              style={{ borderColor: '#ffa007' }}
              onClick={() => {
                document.getElementById('mediaFile').click();
              }}
            >
              Upload
            </button>
          </>
        )}
      </div>
      {imgErr &&imgErr? <div className="text-red-600">Image must be at least 300 x 300 pixels.</div>: <div className="">Image must be at least 300 x 300 pixels.</div>}
      {!img && <ErrorMessage name='mediaFile' component="div" className="text-red-600" />}
    </>
  );
}

export default AddImage;




// import React, { useRef, useState } from 'react';
// import uploadSvg from '../../../assets/vectors/cardIcon/upload.svg';
// import { ErrorMessage, Field } from 'formik';

// function AddImage({ width = '590px', height = '270px' }) {
//   const MIN_DIMENSION = 150;

//   const [selectedImage, setSelectedImage] = useState(null); // State to store selected image
//   const [img, setImg] = useState(false);
//   const [imgErr, setImgErr] = useState(false);
//   const uploadBtn = useRef(null);

//   const handleBtn = () => {
//     uploadBtn.current.click();
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         const img = new Image();
//         img.src = event.target.result;
//         img.onload = () => {
//           console.log("Image natural width:", img.naturalWidth);
//           console.log("Image natural height:", img.naturalHeight);
//           if (img.naturalWidth < 300 || img.naturalHeight < 300) {
//             setImgErr(true); 
//             setSelectedImage(null); 
//           } else {
//             setSelectedImage(event.target.result); 
//             setImgErr(false); 
//           }
//         };
//         img.onerror = () => {
//           console.error("Error loading image");
//           setImgErr(true);
//           setSelectedImage(null);
//         };
//       };
//       reader.onerror = () => {
//         console.error("Error reading file");
//         setImgErr(true);
//         setSelectedImage(null);
//       };
//       reader.readAsDataURL(file);
//       setImg(true);
//     }
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     const file = event.dataTransfer.files[0];
//     if (file) {
//       const reader = new FileReader();

//       reader.onload = (event) => {
//         setSelectedImage(event.target.result); 
//       };
//       reader.onerror = () => {
//         console.error("Error reading dropped file");
//       };
//       reader.readAsDataURL(file);
//       setImg(true);
//     }
//   };

//   const handleRemoveImage = () => {
//     setSelectedImage(null);
//     setImg(false);
//   };

//   return (
//     <>
//       <Field
//         name={name}
//         id='mediaFile'
//         className='hidden'
//         type='file'
//         ref={uploadBtn}
//         accept='image/*'
//         onChange={handleImageChange}
//       />
//       <div className='text-xl mb-3'>Add Image</div>
//       <div
//         className={` border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center relative`}
//         onDrop={handleDrop}
//         onDragOver={handleDragOver}
//         style={{ height: height, width: width }}
//       >
//         {selectedImage ? (
//           <>
//             <img src={selectedImage} alt='Selected Image' style={{ maxWidth: '100%', maxHeight: '100%' }} />
//             <button
//               className='absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded'
//               onClick={handleRemoveImage}
//             >
//               Remove
//             </button>
//           </>
//         ) : (
//           <>
//             <div className='p-3 rounded-lg' style={{ backgroundColor: '#ffa007' }}>
//               <img src={uploadSvg} alt='Upload Icon' />
//             </div>
//             <div className='p-4 text-center'>Drag and Drop here<br />or</div>
//             <button
//               type='button'
//               className='px-6 py-1 text-center border-solid border-2 rounded-xl hover:bg-gray-100'
//               style={{ borderColor: '#ffa007' }}
//               onClick={() => {
//                 document.getElementById('mediaFile').click();
//               }}
//             >
//               Upload
//             </button>
//           </>
//         )}
//       </div>
//       {!selectedImage && imgErr? <div className='text-red-600'>Image must be at least 300 x 300 pixels.</div>:<div className=''>Image must be at least 300 x 300 pixels.</div>}
//       <ErrorMessage name={name} component='div' className='text-red-600' />
//     </>
//   );
// }

// export default AddImage;
