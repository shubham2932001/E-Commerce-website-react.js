


// IS CODE MAI MAGNIFY PROPERTY ADDDED H 



/*
import React, { useState } from "react";
import styled from "styled-components";

const MyImage = ({ imgs = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(imgs[0]);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isZoomed, setIsZoomed] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  return (
    <Wrapper>
      <div className="grid grid-four-column">
        {imgs.map((curElm, index) => (
          <figure key={index}>
            <img
              src={curElm.url}
              alt={curElm.filename}
              className="box-image--style"
              onMouseEnter={() => setHoveredImage(curElm)}
              onMouseLeave={() => setHoveredImage(null)}
              onClick={() => setMainImage(curElm)}
            />
          </figure>
        ))}
      </div>

      <div
        className="main-screen"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
      >
        <img
          src={(hoveredImage || mainImage).url}
          alt={(hoveredImage || mainImage).filename}
          style={{
            transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
            transform: isZoomed ? "scale(2)" : "scale(1)",
          }}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;

  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;

    img {
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }

  .main-screen {
    display: grid;
    place-items: center;
    order: 1;
    overflow: hidden; /* Ensures the zoomed image doesn't overflow */
      /* img {
        max-width: 100%;
        height: auto;
        transition: transform 0.3s ease;
        box-shadow: ${({ theme }) => theme.colors.shadow};
        cursor: zoom-in;
      }
    }
  
    .grid-four-column {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(4, 1fr);
    }   */  
  
   /*  @media (max-width: ${({ theme }) => theme.media.mobile}) {
      display: flex;
      flex-direction: column;
      order: 1;
  
      .grid-four-column {
        grid-template-rows: 1fr;
        grid-template-columns: repeat(4, 1fr);
      }
    }
  `;
  
  export default MyImage;



*/







// is code mai magnify as well as jab 4 out of 1 image pr click krege  to vo main iamge ke roop mai set hojayga

/* import React, { useState } from "react";
import styled from "styled-components";

const MyImage = ({ imgs = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(imgs[0]);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isZoomed, setIsZoomed] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  const handleMouseEnter = (curElm) => {
    setMainImage(curElm);
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  return (
    <Wrapper>
      <div className="grid grid-four-column">
        {imgs.map((curElm, index) => (
          <figure key={index}>
            <img
              src={curElm.url}
              alt={curElm.filename}
              className="box-image--style"
              onMouseEnter={() => handleMouseEnter(curElm)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            />
          </figure>
        ))}
      </div>

      <div
        className="main-screen"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
      >
        <img
          src={mainImage.url}
          alt={mainImage.filename}
          style={{
            transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
            transform: isZoomed ? "scale(2)" : "scale(1)",
          }}
        />
      </div>
    </Wrapper>
  );
};    */

/* const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;

  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;

    img {
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
      transition: transform 0.3s ease, opacity 0.3s ease;
    }
  }  */

 /*  .main-screen {
    display: grid;
    place-items: center;
    order: 1;
    overflow: hidden; /* Ensures the zoomed image doesn't overflow */
   /*  img {
      max-width: 100%;
      height: auto;
      transition: transform 0.3s ease;
      box-shadow: ${({ theme }) => theme.colors.shadow};
      cursor: zoom-in;
    }
  }

  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    order: 1;

    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default MyImage;





*/
























/*

import React, { useState } from "react";
import styled from "styled-components";

const MyImage = ({ imgs = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(imgs[0]);  // ye usestate hook use kia jara h line 142 mai is lie ki jse koi in 4 mai se ek image pr click krega vo image main image ki jagah pr aajygi
                                                        // useState(imgs[0]); jo sbse phla image h 0 vo main image ko pass krdia
  return (
    <Wrapper>
      <div className="grid grid-four-column">
        {imgs.map((curElm, index) => { // loop mai chla re h array of image ko
          return (
            <figure>
              <img
                src={curElm.url}
                alt={curElm.filename}
                className="box-image--style"
                key={index}  // // yha tk line 133 se 142 tk code hmne apne 4 images k lie likha h 
                onClick={() => setMainImage(curElm)}  // ye code likha h is lie ki jse koi in 4 mai se ek image pr click krega vo image main image ki jagah pr aajygi
              />
            </figure>
          );
        })}
      </div>
      {/* 2nd column  */ //}
     

   /*

 

      


      <div className="main-screen">
        <img src={mainImage.url} alt={mainImage.filename} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;

  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;   


    




   

    /*
    
    
    
    img {
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }

  .main-screen {
    display: grid;
    place-items: center;
    order: 1;
    img {
      max-width: 100%;
      height: auto;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    order: 1;

    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default MyImage;  

*/



  




import React, { useState } from "react";
import styled from "styled-components";

const MyImage = ({ imgs = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(imgs[0]);

  return (
    <Wrapper>
      <div className="grid grid-four-column">
        {imgs.map((curElm, index) => {
          return (
            <figure>
              <img
                src={curElm.url}
                alt={curElm.filename}
                className="box-image--style"
                key={index}
                onClick={() => setMainImage(curElm)}
              />
            </figure>
          );
        })}
      </div>
      {/* 2nd column  */}

      <div className="main-screen">
        <img src={mainImage.url} alt={mainImage.filename} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;

  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    /* order: 2; */

    img {
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }

  .main-screen {
    display: grid;
    place-items: center;
    order: 1;
    img {
      max-width: 100%;
      height: auto;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    order: 1;

    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default MyImage;