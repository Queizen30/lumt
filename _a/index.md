---
title: Blog
hidden: true
---

### Welcome!

This is the blog of LUMT, a list of useful Minecraft tools, wich contains various articles about the page itself, LUMT in general, coding or just small projects of mine.


{% for post in site.a %}
  {% if post.hidden != true %}
   <div style="display: block;" class="posts-container">
   <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3> <br>
   <p>{{ post.description }}</p>
   {% for tag in post.tags %}
     <span class="tags">{{ tag }}</span>
   {% endfor %}
   </div>
  {% endif %}
{% endfor %}



