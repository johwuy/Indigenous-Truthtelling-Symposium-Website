import Image from "next/image";
import DownloadImage from "../download-image";
import ArtPieces from "./art-pieces";

function BisanOwda() {
  const paragraphs = [
    "This art piece captures the image of living art and hero Bisan Awda. It is comprised of the various images of Bisan herself standing up and speaking out in the name of justice and liberation, as she has tirelessly done for over two years of genocide."
  ];

  return (
    <ArtPieces name={"Bisan Owda"} paragraphs={paragraphs}>
      <DownloadImage fileName="bisan1.jpg" downloadPath="/bisan/raw-bisan1.jpg">
        <Image
          src="/bisan/bisan1.png"
          alt="Bisan Owda"
          width={1256}
          height={935}
        />
      </DownloadImage>
      <DownloadImage fileName="bisan2.jpg" downloadPath="/bisan/raw-bisan2.jpg">
        <Image
          src="/bisan/bisan2.png"
          alt="Bisan Owda"
          width={1256}
          height={712}
        />
      </DownloadImage>
      <DownloadImage fileName="bisan3.jpg" downloadPath="/bisan/raw-bisan3.jpg">
        <Image
          src="/bisan/bisan3.png"
          alt="Bisan Owda"
          width={1256}
          height={951}
        />
      </DownloadImage>
      <DownloadImage fileName="bisan4.jpg" downloadPath="/bisan/raw-bisan4.jpg">
        <Image
          src="/bisan/bisan4.png"
          alt="Bisan Owda"
          width={874}
          height={1152}
        />
      </DownloadImage>
      <DownloadImage fileName="bisan5.jpg" downloadPath="/bisan/raw-bisan5.jpg">
        <Image
          src="/bisan/bisan5.png"
          alt="Bisan Owda"
          width={1256}
          height={801}
        />
      </DownloadImage>
    </ArtPieces>
  );
}

export default BisanOwda;