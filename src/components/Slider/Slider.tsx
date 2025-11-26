import React, { useRef, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

interface Props {
  images: string[];
}

const Slider: React.FC<Props> = ({ images }) => {
  const mainRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <div
        style={{
          width: '400px',
          height: '400px',
          marginBottom: '20px',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        <Splide
          options={{
            type: 'fade',
            pagination: false,
            arrows: false,
            cover: true,
            height: '400px',
          }}
          ref={mainRef}
          onMoved={(splide: any) => setActiveIndex(splide.index)}
        >
          {images.map((img, i) => (
            <SplideSlide key={i}>
              <img
                src={img}
                alt={`slide-${i}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>

      <Splide
        options={{
          rewind: true,
          fixedWidth: 80,
          fixedHeight: 80,
          isNavigation: false,
          gap: 10,
          focus: 'center',
          pagination: false,
          cover: true,
          arrows: false,
        }}
      >
        {images.map((img, i) => (
          <SplideSlide key={i}>
            <div
              onClick={() => mainRef.current?.splide.go(i)}
              style={{
                cursor: 'pointer',
                border:
                  i === activeIndex ? '2px solid #007bff' : '1px solid gray',
                borderRadius: '8px',
                overflow: 'hidden',
                width: '80px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={img}
                alt={`thumb-${i}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Slider;
