interface LabeledImageProps {
  children: React.ReactNode;
  caption: string;
};

function LabeledImage({ children, caption }: LabeledImageProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="border-creme border-7">
        {children}
      </div>
      <p className="text-creme text-lg font-light">{caption}</p>
    </div>
  );
}

export default LabeledImage;