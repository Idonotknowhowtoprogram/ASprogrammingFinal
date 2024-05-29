---
title: Solace
description: Alter your site config
date:2024-5-5
tags:
  - posts
layout: layouts/post.njk
---

### Idiocracy At Its Finest

With the help of our almighty overseer Changa, we realized that the button form doesnt submit until after the second page click, and that is why our script wasnt working. So instead of using the on element load method, we just added a manual delay. We had trouble with the element selecting which was because the "class" elements in mysa are generated dynamically so Liam has to write a massive for loop to iterate the problem away. 