export type StyleType = "talk" | "singing_teacher" | "frame_decode" | "sing";

export interface Styles {
  id: number;
  name: string;
  type: string;
}

export interface SupportedFeatures {
  permitted_synthesis_morphing: "ALL" | "SELF_ONLY" | "NOTHING"
}

export interface Speaker {
  name: string;
  speaker_uuid: string;
  styles: Styles[];
  version: string;
  supported_features: SupportedFeatures;
}