---
layout: page
title: Yong's Notes
desc: "Some random notes from Yong's IT work."
---
<!--Testing
{% for note in site.notes %}
    title: {{ note.title }}
    url: {{ note.url }}
    content: {{ note.content | strip_html | strip_newlines | escape }},
    summary: {{ note.summary | strip_html | strip_newlines | escape }}
{% endfor %}-->

{% include categories.html %}
{% include search-notes.html %}
<hr>
{% include notes-list.html %}
