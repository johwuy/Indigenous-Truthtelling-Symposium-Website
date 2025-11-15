import BisanOwda from "../components/art-pieces/bisan-owda";
import RefaatAlAreer from "../components/art-pieces/refaat-al-areer";
import ShireenAbuAkleh from "../components/art-pieces/shireen-abu-akleh";

function EduPieces() {
  return (
    <div className="flex flex-col px-24 mb-32">
      <h2 className="mt-12 mb-24 text-pink-300 italic text-7xl/relaxed text-center">Indigenous Art for Education Pieces</h2>
      <BisanOwda />
      <RefaatAlAreer />
      <ShireenAbuAkleh />
    </div>
  );
}

export default EduPieces;