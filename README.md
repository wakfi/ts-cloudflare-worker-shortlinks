## Cloudflare Worker Shortlinks TypeScript Example

This template demonstrates using TypeScript with Cloudflare Workers to implement a fast
shortlinking system, fully under your own control.

[`src`](https://github.com/wakfi/ts-cloudflare-worker-shortlinks/blob/main/src)
is the content of the Workers script.  
[`index.ts`](https://github.com/wakfi/ts-cloudflare-worker-shortlinks/blob/main/src/index.ts)
is the entry point.  
[`handleRequest.ts`](https://github.com/wakfi/ts-cloudflare-worker-shortlinks/blob/main/src/handleRequest.ts)
is the top level handler, which delegates to other helper functions to resolve the request.  
[`links.ts`](https://github.com/wakfi/ts-cloudflare-worker-shortlinks/blob/main/src/links.ts)
defines the shortlink pathnames and corresponding URLs, and exports them as an object.


#### Wrangler

You need [wrangler](https://github.com/cloudflare/wrangler) to interact with cloudflare workers.
[See Cloudflare's documentation](https://developers.cloudflare.com/workers/cli-wrangler/install-update)
for more information.

Before publishing your code you need to edit the [`wrangler.toml`]((https://github.com/wakfi/cloudflare-worker-shortlinks/blob/main/wrangler.toml)) file and add your Cloudflare `account_id` - more information about configuring and publishing your code can be found [in the documentation](https://developers.cloudflare.com/workers/learning/getting-started#7-configure-your-project-for-deployment).

Once you are ready, you can publish your code by running the following command:

```
wrangler publish
```

#### License
This project is licensed under the MIT License. An Apache License is also included, for any who would
prefer it. Feel free to follow the terms of whichever license best suits your needs.

##### More Examples
For more example Worker projects, visit the [examples section](https://developers.cloudflare.com/workers/examples) of Cloudflare's Workers documentation.
