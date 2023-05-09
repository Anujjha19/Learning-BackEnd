import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

const gzip = createGzip();
const input = createReadStream('index.html');
const output = createWriteStream('index.html.gz');

input.pipe(gzip).pipe(output)