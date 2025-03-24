---
layout: page
title: News
permalink: /news/
---

{% raw %}
{% for news in site.news reversed %}
  <h3>{{ news.date | date: "%B %-d, %Y" }}: {{ news.title }}</h3>
  {{ news.content }}
{% endfor %}
{% endraw %}
