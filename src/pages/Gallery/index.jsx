import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';
import img8 from './images/img8.jpg';
import img9 from './images/img9.jpg';
import img10 from './images/img10.jpg';
import img11 from './images/img11.jpg';
import img12 from './images/img12.jpg';
import img13 from './images/img13.jpg';
import img14 from './images/img14.jpg';
import img15 from './images/img15.jpg';
import img16 from './images/img16.jpg';
import img17 from './images/img17.jpg';

const images = [
  { src: img1, title: 'Alumni Meet' },
  { src: img2, title: 'Alumni Meet' },
  { src: img3, title: 'Alumni Meet' },
  { src: img4, title: 'Alumni Meet' },
  { src: img5, title: 'Alumni Talk' },
  { src: img6, title: 'Alumni Talk' },
  { src: img8, title: 'Alumni interaction 22-23' },
  { src: img9, title: 'Alumni interaction 22-23' },
  { src: img10, title: 'Alumni interaction 22-23' },
  { src: img11, title: 'Alumni interaction 22-23' },
  { src: img12, title: 'Alumni interaction 22-23' },
  { src: img13, title: 'Antidrug reporting system 2023-24' },
  { src: img14, title: 'Antidrug reporting system 2023-24' },
  { src: img15, title: 'Antidrug reporting system 2023-24' },
  { src: img16, title: 'Antidrug reporting system 2023-24' },
  { src: img17, title: 'Antidrug reporting system 2023-24' },
];

export default function Gallery() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl px-4 mx-auto text-center">
        {/* Page Title */}
        <h2 className="mb-4 text-3xl font-bold text-[#081b4d]">Gallery</h2>
        <p className="mb-8 text-gray-600">
          Memories captured from our events and gatherings.
        </p>

        {/* Gallery Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
              className="relative overflow-hidden rounded-lg cursor-pointer group focus:outline-none"
            >
              <img
                src={img.src}
                alt={img.title}
                className="object-cover w-full h-64 transition shadow group-hover:opacity-80"
              />
              <div className="absolute px-2 py-1 text-sm text-white bg-[#081b4d] bg-opacity-50 rounded bottom-2 left-2">
                {img.title}
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox Viewer */}
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex].src}
            nextSrc={images[(photoIndex + 1) % images.length].src}
            prevSrc={
              images[(photoIndex + images.length - 1) % images.length].src
            }
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % images.length)
            }
            imageTitle={images[photoIndex].title}
          />
        )}
      </div>
    </section>
  );
}
