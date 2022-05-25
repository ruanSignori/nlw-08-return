import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
  ) {}

  async execute(req: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = req;

    if (!type) {
      throw new Error('Type is required.');
    }

    if (!comment) {
      throw new Error('Comment is required.');
    }

    if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error('Invalid screenshot format');
    }

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    })

    await this.mailAdapter.sendMail({
      subject: "Novo feedback",
      body: [
        `<div style="font-family: sans-serif;">`,
          `<p>Tipo de feedback: <b>${type}</b></p>`,
          `<p style="max-width: 800px">Comentário: ${comment}</p>`,
          screenshot ? `<img src="${screenshot}" width="550" />` : null,
        `</div>`
      ].join("\n")
    })
  }
}