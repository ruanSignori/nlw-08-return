import { FormEvent, useState } from "react";
import { ImArrowLeft2 } from "react-icons/im";

import { api } from "../../../libs/api";
import { CloseButton } from "../../CloseButton";
import { Loading } from "../../Loading";
import { ScreenshotButton } from "../../ScreenshotButton";
import * as _ from "../FeedBackTypes";

type FeedBackContentStepProps = {
  feedBackType: _.FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
};

export function FeedbackContentStep({
  feedBackType,
  onFeedbackRestartRequested,
  onFeedbackSent,
}: FeedBackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState("");
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  const feedbackTypeInfo = _.feedBackTypes[feedBackType];
  const handleSubmitFeedback = async (e: FormEvent) => {
    e.preventDefault();

    setIsSendingFeedback(true);

    await api.post("/feedbacks", {
      type: feedBackType,
      comment,
      screenshot,
    });

    setIsSendingFeedback(false);
    onFeedbackSent();
  };

  return (
    <>
      <header>
        <button
          type="button"
          className="text-zinc-400 hover:text-zinc-100 w-4 h-4 top-5 left-5 absolute"
          onClick={onFeedbackRestartRequested}
        >
          <ImArrowLeft2 fontWeight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>
      <form className="my-4 w-full" onSubmit={(e) => handleSubmitFeedback(e)}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-2 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none outline-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
        />
        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            onScreenshotTook={setScreenshot}
            screenshot={screenshot as string}
          />
          <button
            disabled={comment.length === 0 || isSendingFeedback}
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent flex flex-1 justify-center items-center text-sm hover:bg-brand-300 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            {isSendingFeedback ? <Loading /> : "Enviar feedback"}
          </button>
        </footer>
      </form>
    </>
  );
}
