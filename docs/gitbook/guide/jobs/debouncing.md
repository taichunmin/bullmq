# Debouncing

Debouncing a job implies delaying and deduplicating it.

```typescript
import { Queue } from 'bullmq';

const myQueue = new Queue('Paint');

// Add a job that will be debounced for 5 seconds.
await myQueue.add('house', { color: 'white' }, { debouncedId: 'customValue', delay: 5000 });
```

For the next 5 seconds, after adding this job, next jobs added with same **debouncedId** will be ignored and a _debounced_ event will be triggered by our QueueEvent class.

Note that apart of passing a delay value, you must provide a debouncedId that should represent your job. You can hash your entire job data or a subset of attributes for creating a debouncedId.

{% hint style="warning" %}
Passing `debouncedId` without a `delay` value greater than 0 will throw an Error.
{% endhint %}

## Read more:

* 💡 [Add Job API Reference](https://api.docs.bullmq.io/classes/v5.Queue.html#add)
