import Image from "next/image";
import DownloadImage from "../download-image";
import ArtPieces from "./art-pieces";

function RefaatAlAreer() {
  const paragraphs = [
    "Thousands of photographs of martyred educators, writers, artists and poets in Gaza murdered in the ongoing Israeli scholasticide comprise the image of martyred Shakespear scholar, writer, and poet, Dr Refaat Alareer, whose portrait has been reproduced with the permission of his wife."
  ];
  return (
    <ArtPieces name={"Refaat Al Areer"} paragraphs={paragraphs}>
      <DownloadImage fileName="MainBefore.jpg" downloadLink="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg">
        <Image
          src="/image1.png"
          alt="Refaat Al Areer"
          width={1256}
          height={736}
        />
      </DownloadImage>
    </ArtPieces>
  )
}

export default RefaatAlAreer;