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