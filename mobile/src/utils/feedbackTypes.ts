import BugImageSrc from "../assets/bug.png";
import IdeaImageSrc from "../assets/idea.png";
import ThoughtImageSrc from "../assets/thought.png";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: BugImageSrc,
  },
  IDEA: {
    title: "Ideia",
    image: IdeaImageSrc,
  },
  OTHER: {
    title: "Outro",
    image: ThoughtImageSrc,
  },
};

export type FeedbackType = keyof typeof feedbackTypes;
