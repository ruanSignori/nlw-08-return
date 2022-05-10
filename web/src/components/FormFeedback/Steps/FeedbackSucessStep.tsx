import checking from "../../../assets/checking.svg";
import { CloseButton } from "../../CloseButton";

type FeedbackSucessStepProps = {
  onFeedbackRestartRequested: () => void;
};

export function FeedbackSucessStep({
  onFeedbackRestartRequested,
}: FeedbackSucessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={checking} alt="Sucesso" />
        <span className="text-xl mt-2">Agradecemos o seu feedback!</span>

        <button
          onClick={onFeedbackRestartRequested}
          type="button"
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500"
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
}
