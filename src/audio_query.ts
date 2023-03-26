import { RestAPI } from "./rest";
import { audioQuery as audioQueryT } from "./types/audioquery";
import { synthesisParams } from "./types/synthesis";

export class audioQuery {
  rest: RestAPI;
  audioQuery: audioQueryT;

  constructor(rest: RestAPI, audioQuery: audioQueryT) {
    this.rest = rest;
    this.audioQuery = audioQuery;
  }

  async synthesis(
    speaker: number,
    options: {
      interrogative_upspeak?: boolean;
      core_version?: string;
    }
  ): Promise<ArrayBuffer> {
    let params: synthesisParams = {
      speaker: speaker,
    };
    if (options.interrogative_upspeak) {
      params["enable_interrogative_upspeak"] = options.interrogative_upspeak;
    }
    if (options.core_version) {
      params["core_version"] = options.core_version;
    }
    return await this.rest.synthesis(this.audioQuery, params);
  }
}
