import { Popover } from "@headlessui/react";
import { BsChatDots } from "react-icons/bs";

import { FormFeedback } from "../FormFeedback";

export function Widget() {
  return (
    <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
      <Popover.Panel>
        <FormFeedback />
      </Popover.Panel>
      <Popover.Button
        type="button"
        className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group"
      >
        <BsChatDots className="w-6 h-6" fontWeight="bold" />

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2" />
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}
