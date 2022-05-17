import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
)

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(submitFeedback.execute({
      type: "BUG",
      comment: "aeaeae",
      screenshot: 'data:image/png;base64/test.png',
    })).resolves.not.toThrow();
    
    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });
});

describe('Submit feedback', () => {
  it('should not be able to submit feedback without type', async () => {
    await expect(submitFeedback.execute({
      type: "",
      comment: "aeaeae",
      screenshot: 'data:image/png;base64/test.png',
    })).rejects.toThrow();
  });
});

describe('Submit feedback', () => {
  it('should not be able to submit feedback without comment', async () => {
    await expect(submitFeedback.execute({
      type: "BUG",
      comment: "",
      screenshot: 'data:image/png;base64/test.png',
    })).rejects.toThrow();
  });
});

describe('Submit feedback', () => {
  it('should not be able to submit feedback with an invalid screenshot', async () => {
    await expect(submitFeedback.execute({
      type: "BUG",
      comment: "Péssimos...",
      screenshot: 'data.jpg',
    })).rejects.toThrow();
  });
});