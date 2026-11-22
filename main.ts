// The World in One Page — entrypoint for the 21 November 2026 news-image entry.
//
// The front page itself is drawn ahead of time and stored beside this file as
// entry.png (a 1024x1024 PNG, well under the gate's size limit). This program's
// job at grading time is deliberately small: check the stored page is intact,
// then publish it to the output directory under the name the judge reads,
// entry.png. It runs with no network and only the Node standard library, and
// it is deterministic — the bytes written are exactly the bytes stored, on
// every run, so the program's two grading runs agree byte for byte.
//
// The output directory is /output inside the grader's container; when running
// locally, MAKEFUN_OUTPUT_DIR points at a stand-in directory instead:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const PAGE_NAME = 'entry.png';
const MAX_PAGE_BYTES = 1024 * 1024; // the gate's 1 MiB ceiling
const MAX_PAGE_EDGE = 1024; // the gate's pixel ceiling per side
const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
const JPEG_SIGNATURE = [0xff, 0xd8, 0xff];

function hasSignature(bytes, signature) {
  return signature.every((byte, index) => bytes[index] === byte);
}

// Read the stored page and refuse to publish anything the gate would reject
// out of hand: an empty or oversized file, bytes that are not the PNG or JPEG
// the file's first bytes claim to be, or a PNG whose header promises a canvas
// larger than the gate's 1024 by 1024 pixels.
function loadPage() {
  const here = dirname(fileURLToPath(import.meta.url));
  const bytes = readFileSync(join(here, PAGE_NAME));
  if (bytes.length === 0 || bytes.length > MAX_PAGE_BYTES) {
    throw new Error(`${PAGE_NAME} is ${bytes.length} bytes; the gate allows 1..${MAX_PAGE_BYTES}`);
  }
  if (hasSignature(bytes, PNG_SIGNATURE)) {
    // A PNG's first chunk is always IHDR: its width and height sit at fixed
    // offsets 16 and 20, big-endian, right after the signature and the
    // chunk's length and type fields.
    const width = bytes.readUInt32BE(16);
    const height = bytes.readUInt32BE(20);
    if (width === 0 || height === 0 || width > MAX_PAGE_EDGE || height > MAX_PAGE_EDGE) {
      throw new Error(`${PAGE_NAME} is ${width}x${height}; the gate allows at most ${MAX_PAGE_EDGE}x${MAX_PAGE_EDGE}`);
    }
  } else if (!hasSignature(bytes, JPEG_SIGNATURE)) {
    throw new Error(`${PAGE_NAME} is neither a PNG nor a JPEG image`);
  }
  return bytes;
}

function publish(bytes) {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, PAGE_NAME), bytes);
}

publish(loadPage());
