---
title: How does LUMT work?
layout: post
description: Ever wondered how this sites backend works?
tags: lumt backend
---

For a post purely about frontend, see [[Coming soon...]](#)
# Hosting
I use [GitHub Pages](https://docs.github.com/en/pages) for hosting LUMT and [Jekyll](https://jekyllrb.com/) as the generator.

## GitHub Pages
I use [this](https://github.com/Queizen30/lumt/blob/main/.github/workflows/static.yml) custom workflow to deploy to GitHub Pages. As you can see, I also have a CNAME Record (If you don't know what DNS Records are, see [here](https://www.cloudflare.com/learning/dns/dns-records/).) set up [here](https://github.com/Queizen30/lumt/blob/main/CNAME) for my [domain](#domain).

## Jekyll
If you don't know what Jekyll is, it's basicly a converter that takes Markdown, HTML and CSS and spits out a static site. (If you do know what Jekyll is and want to get started, I recommend [this](https://www.aleksandrhovhannisyan.com/blog/getting-started-with-jekyll-and-github-pages/) awesome tutorial.)  
I build the site locally into the [_site](https://github.com/Queizen30/lumt/tree/main/_site) directorary and then push it to GitHub. Then [this](https://github.com/Queizen30/lumt/blob/main/.github/workflows/static.yml) workflow takes it and deploys it to GitHub Pages.

### Theme
LUMT is using a [custom theme](https://github.com/Queizen30/lumt/pull/6) made by myself wich is sometimes getting small improvments. I wouldn't recommend using this theme when there are [hunderts other](https://jekyllrb.com/docs/themes/) easy to use themes.

# Domain
I use [Digitalplat Domains](https://domain.digitalplat.org/) for a free domain and [Cloudflare](https://www.cloudflare.com/) for DNS.