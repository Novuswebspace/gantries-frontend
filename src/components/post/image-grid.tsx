"use client";

import {  useMemo, useState } from "react";
import { Gallery, Image } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

type ImageGridProps = {
  imgs: string[];
};

export default function ImageGrid({ imgs }: ImageGridProps) {
  const [index, setIndex] = useState(-1);

  const images = useMemo(
    () => imgs.map((img) => ({ src: img } as Image)),
    [imgs]
  );

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index: number) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <div>
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
      />
      {!!currentImage && (
        /* @ts-ignore */
        <Lightbox
          mainSrc={currentImage.src}
          imageTitle={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.src}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.src}
          discourageDownloads={true}          
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
          animationDisabled={true}

        />
      )}
    </div>
  );
}
