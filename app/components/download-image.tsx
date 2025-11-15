"use client";

import { JSX } from "react";

interface DownloadImageProps {
  children: JSX.Element;
  fileName: string;
  downloadLink: string;
}

function DownloadImage({ children, downloadLink, fileName }: DownloadImageProps) {
  async function handleClick() {
    const response = await fetch(`/api/download?url=${downloadLink}&fileName=${fileName}`);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  }

  return (
    <div className="flex flex-col items-center">
      {children}
      <button onClick={handleClick}>Download</button>
    </div>
  );
}

export default DownloadImage;