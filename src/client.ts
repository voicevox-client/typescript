import { RestAPI } from "./rest";
import { audioQuery } from "./audio_query";

// voicevox client
/**
 * @param engine_url - URL of voicevox engine
 *
 * @example
 * ```typescript
 * import Client from "voicevox-client";
 *
 * const client = new Client("http://127.0.0.1:50021");
 *
 * async function main() {
 *   const audioQuery = await client.createAudioQuery("こんにちは", 0);
 *   await audioQuery.synthesis(0);
 * };
 *
 * main();
 * ```
 */
export class Client {
  readonly rest: RestAPI;

  constructor(engine_url: string) {
    this.rest = new RestAPI(engine_url);
  }

  // Create audio query
  /**
   * @param text - Japanese text
   * @param speaker - Speaker ID
   * @param options - Options
   * @param options.core_version - Core version
   */
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
