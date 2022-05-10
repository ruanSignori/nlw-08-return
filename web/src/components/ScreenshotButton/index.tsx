import html2canvas from "html2canvas";
import { useState } from "react";
import { BsCamera, BsTrashFill } from "react-icons/bs";

import { Loading } from "../Loading";

type ScreenshotButtonProps = {
  screenshot: string | null;
  onScreenshotTook: (screenshot: string | null) => void;
};

export function ScreenshotButton({
  onScreenshotTook,
  screenshot,
}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  const handleTakeScreenshot = async () => {
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");

    onScreenshotTook(base64image);
    setIsTakingScreenshot(false);
  };

  const handleDeleteScreenshot = () => {
    onScreenshotTook(null);
  };

  if (screenshot) {
    return (
      <button
        onClick={handleDeleteScreenshot}
        type="button"
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: "right bottom",
          backgroundSize: 180,
        }}
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
      >
        <BsTrashFill fontWeight="bold" className="w-4 h-4" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="bg-zinc-900 p-2 rounded-md border-transparent hover:bg-zinc-700 transition-colors outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
    >
      {isTakingScreenshot ? (
        <Loading />
      ) : (
        <BsCamera className="w-6 h-6 text-zinc-100" />
      )}
    </button>
  );
}
