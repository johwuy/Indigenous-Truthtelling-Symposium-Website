import Image from "next/image";
import DownloadImage from "../download-image";
import ArtPieces from "./art-pieces";

function ShireenAbuAkleh() {
  const paragraphs = [
    "Before her horrific murder at the hands of the Israeli military, Shireen was among Palestine’s greatest advocates and storytellers. Palestinian journalists show unmatched courage in confronting a genocidal army to give voice to that military’s victims. Shireen’s image is made up of the other 244 + Palestinian journalists who have lost their lives in the genocide.",
    "Photographs of over 200 journalists murdered in Gaza by the Israeli colonization forces since October 2023 comprise this mosaic of murdered Palestinian-American journalist, Shireen Abu Akleh."
  ];
  return (
    <ArtPieces name={"Shireen Abu Akleh"} paragraphs={paragraphs}>
      <DownloadImage fileName="MainBefore.jpg" downloadLink="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg">
        <Image
          src="/shireen/shireen1.png"
          alt="Shireen Abu Akleh"
          width={830}
          height={1086}
        />
      </DownloadImage>
      <DownloadImage fileName="MainBefore.jpg" downloadLink="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg">
        <Image
          src="/shireen/shireen2.png"
          alt="Shireen Abu Akleh"
          width={1428}
          height={1232}
        />
      </DownloadImage>
      <DownloadImage fileName="MainBefore.jpg" downloadLink="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg">
        <Image
          src="/shireen/shireen3.png"
          alt="Shireen Abu Akleh"
          width={1174}
          height={685}
        />
      </DownloadImage>
      <DownloadImage fileName="MainBefore.jpg" downloadLink="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg">
        <Image
          src="/shireen/shireen4.png"
          alt="Shireen Abu Akleh"
          width={1182}
          height={670}
        />
      </DownloadImage>
    </ArtPieces>
  );
}
export default ShireenAbuAkleh;


