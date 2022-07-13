import { Worker } from './src/classes';
//const wtf = require('wtfnode');
const log = require('why-is-node-running');

describe('BullMQ worker', () => {
  it('leaves handles open after awaiting close()', async () => {
    const worker = new Worker('queue-name', async job => {}, {
      autorun: false,
      connection: {
        maxRetriesPerRequest: null,
      },
    });
    const promise = worker.run();
    await new Promise(res => setTimeout(res, 200));

    await worker.close();
    await promise;
    log();
  });
});
