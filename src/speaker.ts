import { Speaker as SpeakerT, Styles, SupportedFeatures } from "./types/speaker";

// speaker
export class Speaker {
  public name: string;
  public speaker_uuid: string;
  public styles: Styles[];
  public version: string;
  public supported_features: SupportedFeatures;

  constructor(speaker: SpeakerT) {
    this.name = speaker.name;
    this.speaker_uuid = speaker.speaker_uuid;
    this.styles = speaker.styles;
    this.version = speaker.version;
    this.supported_features = speaker.supported_features;
  }
}
