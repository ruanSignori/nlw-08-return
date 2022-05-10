import { Switch } from "@headlessui/react";
import { useState } from "react";

export function Toggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "bg-blue-600" : "bg-gray-200"
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only text-yellow-50">Enable notifications</span>
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 rounded-full bg-white transform transition ease-in-out duration-200`}
      />
    </Switch>
  );
}
