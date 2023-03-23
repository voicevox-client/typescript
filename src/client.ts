import { RestAPI } from "./http";
import { audioQuery } from "./audio_query";

export class Client {
  rest: RestAPI;

  constructor(engine_url: string) {
    this.rest = new RestAPI(engine_url);
  }

  async createAudioQuery(
    text: string,
    speaker: number,
    options: {
      core_version?: string;
    }
  ): Promise<audioQuery> {
    let audioquery = await this.rest.createAudioQuery(text, speaker, options);
    return new audioQuery(this.rest, audioquery);
  }
}
