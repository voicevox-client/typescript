import { RestAPI } from "./rest";
import { audioQuery as audioQueryT, accentPhrase } from "./types/audioquery";
import { synthesisParams } from "./types/synthesis";

// audio query
export class audioQuery {
  private rest: RestAPI;
  public speedScale: number;
  public pitchScale: number;
  public accentPhrases: accentPhrase[];
  public intonationScale: number;
  public volumeScale: number;
  public prePhonemeLength: number;
  public postPhonemeLength: number;
  public outputSamplingRate: number;
  public outputStereo: boolean;
  public kana: string;

  constructor(rest: RestAPI, audioQuery: audioQueryT) {
    this.rest = rest;
    this.accentPhrases = audioQuery.accent_phrases;
    this.speedScale = audioQuery.speedScale;
    this.pitchScale = audioQuery.pitchScale;
    this.intonationScale = audioQuery.intonationScale;
    this.volumeScale = audioQuery.volumeScale;
    this.prePhonemeLength = audioQuery.prePhonemeLength;
    this.postPhonemeLength = audioQuery.postPhonemeLength;
    this.outputSamplingRate = audioQuery.outputSamplingRate;
    this.outputStereo = audioQuery.outputStereo;
    this.kana = audioQuery.kana;
  }

  // Synthesis
  /**
   *
   * @param speaker Speaker ID
   * @param options options
   * @param options.interrogative_upspeak Enable upspeak
   * @param options.core_version Core version
   * @returns voice data
   */
  async synthesis(
    speaker: number,
    options?: {
      interrogative_upspeak?: boolean;
      core_version?: string;
    }
  ): Promise<ArrayBuffer> {
    options ??= {};
    let params: synthesisParams = {
      speaker: speaker,
    };
    if (options.interrogative_upspeak) {
      params["enable_interrogative_upspeak"] = options.interrogative_upspeak;
    }
    if (options.core_version) {
      params["core_version"] = options.core_version;
    }
    return await this.rest.synthesis(
      { ...this, accent_phrases: this.accentPhrases },
      params
    );
  }
}
