---
layout: default
title: 🌸 Henrik 🌸 松山大学
---

<div class="logo-container">
  <div class="logo">
    <a href="http://www.matsuyama-u.ac.jp/"><img src="{{ '/imgs/pic_logo.svg' | relative_url }}" alt="Logo"></a>
  </div>
</div>


<div id="blossom-container" class="section title-background" style="background-color:#4a88a8ff;">
  <div class="title"> SKIBBE Henrik 研究室</div>
  <img src="{{ '/imgs/henrik_s.png' | relative_url }}" alt="Henrik" class="portrait">
</div>

<div class="section shoukai" style="background-color:rgb(32,54,65);color:white">
  {% capture intro %}
    {% include intro_ja.md %}
  {% endcapture %}
  {{ intro | markdownify }}
</div>


<div class="section" style="margin-bottom:100px;">
  <div class="cat-container">
    <img src="{{ '/imgs/lab_title_res2.jpg' | relative_url }}" class="cat-image" alt="cat">
    <div class="eye left-eye"><div class="pupil"></div></div>
    <div class="eye right-eye"><div class="pupil"></div></div>
  </div>

  {% capture research %}
  # 研究紹介

  - [Google Scholar](https://scholar.google.com/citations?user=sQyGf94AAAAJ&hl=en){:target="_blank" rel="noopener"}
  - [Bitbucket](https://bitbucket.org/skibbe/){:target="_blank" rel="noopener"}
  - [GitHub](https://github.com/BrainImageAnalysis){:target="_blank" rel="noopener"}
  - [researchmap](https://researchmap.jp/henrik){:target="_blank" rel="noopener"}
  {% endcapture %}
  {{ research | markdownify }}

  <!-- Keep your gallery items exactly as before, just fix image paths with relative_url -->
  <div class="gallery">

  {% assign items = site.gallery | sort: 'order' %}
  {% for it in items %}
    {% include gallery_item.html
       title=it.title
       img=it.img
       link=it.link
       video_id=it.video_id
       content=it.content %}
  {% endfor %}


    
  </div> 
</div>

<div id="blossom-container_"></div>
