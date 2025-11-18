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
      <DownloadImage fileName="shireen1.jpg" downloadPath="/shireen/raw-shireen1.jpg">
        <Image
          src="/shireen/shireen1.png"
          alt="Shireen Abu Akleh"
          width={830}
          height={1086}
        />
      </DownloadImage>
      <DownloadImage fileName="shireen2.jpg" downloadPath="/shireen/raw-shireen2.jpg">
        <Image
          src="/shireen/shireen2.png"
          alt="Shireen Abu Akleh"
          width={1428}
          height={1232}
        />
      </DownloadImage>
      <DownloadImage fileName="shireen3.jpg" downloadPath="/shireen/raw-shireen3.jpg">
        <Image
          src="/shireen/shireen3.png"
          alt="Shireen Abu Akleh"
          width={1174}
          height={685}
        />
      </DownloadImage>
      <DownloadImage fileName="shireen4.jpg" downloadPath="/shireen/raw-shireen4.jpg">
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


