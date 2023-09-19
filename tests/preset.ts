import assert from "assert";
import Client from "../dist";
import { Preset } from "../dist/preset";

const client = new Client("http://127.0.0.1:50021");

async function main() {
  const presets = await client.fetchPresets();
  const preset = new Preset({
    id: 1000,
    name: "string",
    speaker_uuid: "string",
    style_id: 0,
    speedScale: 0,
    pitchScale: 0,
    intonationScale: 0,
    volumeScale: 0,
    prePhonemeLength: 0,
    postPhonemeLength: 0,
  });

  preset.id = await client.addPreset(preset);
  assert(presets.length + 1 === (await client.fetchPresets()).length);

  preset.speedScale = 2;
  await client.updatePreset(preset);
  assert(presets.length + 1 === (await client.fetchPresets()).length);

  await client.deletePreset(preset.id);
  assert(presets.length === (await client.fetchPresets()).length);
}

main();
