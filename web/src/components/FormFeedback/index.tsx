/* eslint-disable react/jsx-no-useless-fragment */
import { useState } from "react";

import * as _ from "./FeedBackTypes";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./Steps/FeedbackSucessStep";
import { FeedbackTypeSteep } from "./Steps/FeedbackTypeSteep";

export function FormFeedback(): JSX.Element {
  const [feedbackType, setFeeedbackType] = useState<_.FeedbackType | null>(
    null
  );
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleRestartFeedback = () => {
    setFeedbackSent(false);
    setFeeedbackType(null);
  };

  return (
    <div className=" p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSucessStep
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeSteep onFeedbackTypeChanged={setFeeedbackType} />
          ) : (
            <FeedbackContentStep
              onFeedbackSent={() => setFeedbackSent(true)}
              feedBackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ por{" "}
        <a href="https://github.com/ruanSignori" className="underline-offset-2">
          Ruan Signori
        </a>
      </footer>
    </div>
  );
}
