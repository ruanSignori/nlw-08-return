import { Popover } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";

export function CloseButton() {
  return (
    <Popover.Button
      className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100"
      title="Fechar formulário de feedback"
    >
      <IoMdClose fontWeight="bold" className="w-4 h-4" />
    </Popover.Button>
  );
}
