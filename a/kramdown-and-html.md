---
title: How to include HTML in your Jekyll markdown files
layout: post
---

#### hey there and welcome to this tutorial!

In this tutorial (well it kinda isn't a tutorial) we will cover on how to include HTML in your `.md` files when you use [Jekyll](https://jekyllrb.com/). When you embed HTML in your Markdown (or in this case [kramdown](https://kramdown.gettalong.org/) wich is the default Markdown renderer used by Jekyll) magic happens, e.g. you can add copy buttons for your code blocks (yeah those aren't built in in most themes) or embed youtube videos.

#### and how can i do it?

Well, it's simple. _very_ simple. _very very_ simple. _very very very si..._

##### i just want to know how to!

You just write it. Thats because the default parser and converter of Jekyll, `kramdown` (Fun Fact: the actual name of it is without capital letters), converts itself, Markdown, GFM ([Github Flavored Markdown](https://github.github.io/gfm/)) and HTML into `.html` files.

So this is not really a tutorial but rather a documentation about it. (Very samll documentation though)

## Examples

The following are examples on what HTML/JS in your Jekyll site can do:

#### Embed youtube videos:
<iframe width="560" height="315" src="https://www.youtube.com/embed/F8iOU1ci19Q?si=MfBiNvL1_ncfUJ_v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

#### Create copy buttons for your code
<pre><code id="code">console.log('Hello, world!')</code></pre>
<button onclick="navigator.clipboard.writeText(document.getElementById('code').innerText)">Copy</button>