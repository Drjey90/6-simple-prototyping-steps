---
layout: "_layouts/base.njk" 

page:
  title: "Style your pages with Modern CSS"
  subtitle: "Write the styles of your website"
  primary_msg: "Consider writing the CSS of your pages using best-practices and Modern CSS to implement robust and flexible layouts."
  description: "Consider writing the CSS of your pages using best-practices and Modern CSS to implement robust and flexible layouts."

pagesubnav:
  previousUrlText: 'CSS Architecture'
  previousUrl: '/css-architecture'
  pageNumber: '6'
  nextUrl: '/testing'
  nextUrlText: 'Testing'
---

Designing an engaging and complex responsive layout is challenging, especially without using modern CSS properties and techniques to implement these designs.

### Problem: Pay attention to frameworks

Back then, we needed to rely on _external libraries, Javascript or heavy frameworks_ to implement **complex layouts**, which impacted performance because of the heavy code-base.

### Solution: Build layouts with modern CSS

CSS has grown up, and over the last few years, new CSS properties have emerged, allowing us to implement complex, flexible and cutting-edge layouts with less CSS.

The whole idea is to combine existing CSS with CSS layouts rules _(e.g. flexbox, CSS Grids, Container-Queries, and multi-columns...)_ to **save a lot of time** in implementing **engaging** and **performant** layouts.

### Checklist

#### Tips for optimising and writing CSS

<ol class="[ special-list ][ special-list--checklist bg-white-color ]">
   <li>Did we use CSS Custom Properties to control foundation styles?</li>
   <li>Did we use a Variable font?</li>
   <li>Did we use a typographic scale?</li>
   <li>Did we use <em>Flexbox</em>, <em>CSS Grids</em> and <em>Multi-columns</em> to build our layouts?</li>
   <li>Did we organise properly our CSS files and rules?</li>
   <li>Did you we minimise the number of overrides ?</li>
   <li>Did we use modern selectors to style HTML elements?</li>
   <li>Did we optimise the ratio of our images?</li>
   <li>Did enhance styles for keyboard navigation?</li>
</ol>

### Takeaways

*   Use variables to control colors, spacing and typography
*   Use variable font to use granular weight and styles
*   Do we have a good rythm and visual hierarchy on our pages?
*   Use [Utopia](https://utopia.fyi/) to generate a type and spacing scale
*   Apply the correct aspect-ratio on your images/media
*   Use the CSS Layout to build your pages

<section class="[ resources ][ grid--4-5 grid ]" data-gap="gap">
<div class="[ resources__links ] [ flow ]">
<h3>Ressource</h3>

<p>Links for further reading:</p>
<ul class="[ content-list ][ content-list--links ]">
   <li><a href="https://www.youtube.com/watch?v=7X8R_KVB3uc
      ">Fluid Typography</a></li>
   <li><a href="https://web.dev/learn/css/" target="_blank">Learn CSS</a></li>
   <li><a href="https://variablefonts.io/implementing-variable-fonts/#gf-api" target="_blank">Implementing Variable Fonts</a></li>
   <li><a href="https://www.smashingmagazine.com/2021/04/guide-supported-modern-css-pseudo-class-selectors/" target="_blank">Modern new CSS selectors</a></li>
   <li><a href="https://web.dev/one-line-layouts/" target="_blank">Modern layouts with CSS</a></li>
   <li><a href="https://www.youtube.com/watch?v=5uhIiI9Ld5M&amp;ab_channel=Hey%21Presents" target="_blank">Browser’s Mentor, Not Micromanager</a></li>
   <li><a href="https://piccalil.li/tutorial/create-a-responsive-grid-layout-with-no-media-queries-using-css-grid/" target="_blank">Create a responsive grid layout</a></li>
   <li><a href="https://www.smashingmagazine.com/category/css-grid" target="_blank">CSS Grid</a></li>
   <li><a href="https://www.smashingmagazine.com/2019/01/css-multiple-column-layout-multicol/" target="_blank">CSS Multi-Column Layout</a></li>
   <li><a href="https://stuffandnonsense.co.uk/blog/how-a-3-4-compound-grid-can-improve-on-12-columns" target="_blank">Layout love: 3+4 Compound Grids</a></li>
   <li><a href="https://12daysofweb.dev/2021/container-queries/" target="_blank">Container queries</a></li>
</ul>
</div>
   {% include 'partials/_book.njk' %}
</section>