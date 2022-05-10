import { AiOutlineLoading3Quarters } from "react-icons/ai";

export function Loading() {
  return (
    <div className="w-6 h-6 grid place-items-center overflow-hidden">
      <AiOutlineLoading3Quarters
        className="w-4 h-4 animate-spin"
        fontWeight="bold"
      />
    </div>
  );
}
