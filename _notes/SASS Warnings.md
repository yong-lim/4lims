---
layout: project
summary: "The commands to run for SASS warning."
categories: [sass]
date: 2026-08-26
---
#### For division warnings
Run the following commands:

``` bash
cd _sass 
sass-migrator division **/*.scss
```

#### For import warnings
Run the following commands, replace **your-entrypoint.scss:**
``` bash
sass-migrator module --migrate-deps **your-entrypoint.scss**
```
