import { Preset as PresetT } from "./types/preset";

// preset
export class Preset {
  public id: number;
  public name: string;
  public speaker_uuid: string;
  public style_id: number;
  public speedScale: number;
  public pitchScale: number;
  public intonationScale: number;
  public volumeScale: number;
  public prePhonemeLength: number;
  public postPhonemeLength: number;

  constructor(preset: PresetT) {
    this.id = preset.id;
    this.name = preset.name;
    this.speaker_uuid = preset.speaker_uuid;
    this.style_id = preset.style_id;
    this.speedScale = preset.speedScale;
    this.pitchScale = preset.pitchScale;
    this.intonationScale = preset.intonationScale;
    this.volumeScale = preset.volumeScale;
    this.prePhonemeLength = preset.prePhonemeLength;
    this.postPhonemeLength = preset.postPhonemeLength;
  }
}
