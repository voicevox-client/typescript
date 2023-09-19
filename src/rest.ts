import {
  audioQuery,
  createAudioQueryOptions,
  createAudioQueryFromPresetOptions,
} from "./types/audioquery";
import { Preset } from "./types/preset";
import { synthesisParams } from "./types/synthesis";

type fetchOptions = {
  method: string;
  headers?: Record<string, string>;
  body?: any;
};

export class RestAPI {
  engine_url: string;

  constructor(engine_url: string) {
    this.engine_url = engine_url;
  }

  async request(
    method: string,
    path: string,
    options?: {
      body?: any;
      params?: any;
    }
  ): Promise<any> {
    let url = this.engine_url + path;
    if (options?.params) {
      url += "?" + new URLSearchParams(options.params).toString();
    }
    var fetch_options: fetchOptions = {
      method: method,
    };
    if (options?.body) {
      fetch_options["headers"] = { "Content-Type": "application/json" };
      fetch_options["body"] = JSON.stringify(options.body);
    }
    let response = await fetch(url, fetch_options);
    if (response.headers.get("Content-Type") === "application/json") {
      return await response.json();
    } else {
      return await response.arrayBuffer();
    }
  }

  async createAudioQuery(
    text: string,
    speaker: number,
    options: {
      core_version?: string;
    }
  ): Promise<audioQuery> {
    let params: createAudioQueryOptions = {
      text: text,
      speaker: speaker,
    };
    if (options.core_version) {
      params["core_version"] = options.core_version;
    }
    return await this.request("POST", "/audio_query", {
      params: params,
    });
  }

  async createAudioQueryFromPreset(
    text: string,
    preset_id: number,
    options: {
      core_version?: string;
    }
  ): Promise<audioQuery> {
    let params: createAudioQueryFromPresetOptions = {
      text: text,
      preset_id: preset_id,
    };
    if (options.core_version) {
      params["core_version"] = options.core_version;
    }
    return await this.request("POST", "/audio_query_from_preset", {
      params: params,
    });
  }

  async synthesis(
    audioQuery: audioQuery,
    params: synthesisParams
  ): Promise<ArrayBuffer> {
    return await this.request("POST", "/synthesis", {
      body: audioQuery,
      params: params,
    });
  }

  async getPresets(): Promise<Preset[]> {
    return await this.request("GET", "/presets");
  }
}
