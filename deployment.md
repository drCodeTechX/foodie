###Rember to set managed resource

###in next.config.ts
 ```
 import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  output: 'standalone'
};

export default nextConfig;
```

###In Azure startup command put this command
```
node server.js
```
#For it to run, update the github actions to only upload the standalone folder, otherwise do node [fullpath]