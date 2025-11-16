import Image from "next/image";
import DownloadImage from "../download-image";

function RefaatAlAreer () {
  return (
    <div className="flex flex-col mb-16">
      <h3 className="italic font-extrabold text-center text-7xl text-creme mb-6">Refaat Al Areer </h3>
      <div className="flex flex-col gap-3 mb-12">
        <p className="text-center text-3xl/relaxed text-creme">This art piece is of Gazan educator, professor, poet and Shakespeare scholar, Refaat Al Areer, who was martyred in the genocide.</p>
        <p className="text-center text-3xl/relaxed text-creme">This piece is comprised of hundreds of different artists, educators, and professors who were also martyred. </p>

      </div>
      <DownloadImage fileName="MainBefore.jpg" downloadLink="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg">
        <Image
          src="/refaat1.png"
          alt="Refaat Al Areer"
          width={1256}
          height={736}
        />
      </DownloadImage>
    </div>
  )
}

export default RefaatAlAreer;