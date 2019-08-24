---
id: lerna
title: Lerna
---

To be able to run ```npm install``` command or ```yarn``` in different folders it is used Lerna here.
Configuration for Lerna you can find in the root of the project, in the file named ```lerna.json```

```json
{
  "npmClient": "yarn",
  "version": "independent",
  "parallel": true,
  "stream": true,
  "packages": [
    "src/**"
  ],
  "useWorkspaces": true,
  "workspaces": ["src/*"]
}
```
