export interface audioQuery {
  accent_phrases: accentPhrase[];
  speedScale: number;
  pitchScale: number;
  intonationScale: number;
  volumeScale: number;
  prePhonemeLength: number;
  postPhonemeLength: number;
  outputSamplingRate: number;
  outputStereo: boolean;
  kana: string;
}

interface accentPhrase {
  moras: mora[];
  accent: number;
  pause_mora: mora;
  is_interrogative: boolean;
}

interface mora {
  text: string;
  consonant: string;
  consonant_length: number;
  vowel: string;
  vowel_length: number;
  pitch: number;
}

export interface createAudioQueryOptions {
  text: string;
  speaker_id: number;
  core_version?: string;
}
