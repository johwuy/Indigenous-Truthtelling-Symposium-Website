import Image from "next/image";
import DownloadImage from "../download-image";

function BisanOwda() {
  return (
    <div className="flex flex-col mb-16">
      <h3 className="italic font-extrabold text-center text-7xl text-creme mb-6">Bisan Owda</h3>
      <p className="text-center text-3xl/relaxed text-creme mb-12">This art piece captures the image of living art and hero Bisan Awda. It is comprised of the various images of Bisan herself standing up and speaking out in the name of justice and liberation, as she has tirelessly done for over two years of genocide.</p>
      <DownloadImage fileName="MainBefore.jpg" downloadLink="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg">
        <Image
          src="/image3.png"
          alt="Poppies in Palestine Series by Monah Kadah"
          width={727}
          height={549}
        />
      </DownloadImage>
    </div>
  )
}

export default BisanOwda;