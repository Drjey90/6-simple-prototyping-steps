---
layout: "_layouts/base.njk" 
bodyClass: "[ last-page ]"
title: "Design examples"
tags: ["guidelines"]

subtitle: "Preview of the prototype of a dummy article."
primary_msg: "A prototype with common elements and typesetting"
description: "Design example with Modern CSS, CSS Grids, Custom Properties, Container Queries, Fluid Typography and CUBE Methodology."

pageNumber: '8'
previousUrlText: 'Testing'
previousUrl: '/testing'
nextUrl: '/examples'
nextUrlText: ''
---

Implementing your designs following best practices and cutting-edge techniques about responsive design, semantic markup, accessibility, and performance will help you design effective websites and save time.

Below are examples to help you dig around and see how we apply the styles on different design examples

In this page you will find a collection of layouts and components coded in HTML & CSS with different art-direction. 

The layouts are available as static HTML & CSS files to use as a foundation for designing your next article pages with modern HTML & CSS.

<div class="[ cta-btn ][ outline ]">
  <a href="https://github.com/Drjey90/6-simple-steps-design-examples/archive/refs/heads/main.zip">♠️  Download design files in HTML & CSS</a>
</div>
      
<h3>Article templates</h3>

<ul class="[ posts ] [ l-rs grid two ]" data-gap="gap">
   {% for post in collections.article %} 
   <li class="posts__item">
      <article>
         <figure>
            <a href="{{ post.url }}">
            <img rel="preload" class="ratio" 
               src="{{  post.data.image }}" 
               alt="{{  post.data.imageAlt }}
               ">
         </figure>
         </a>
         <h3><a href="{{ post.url }}">{{ post.data.title }}</a></h3>
         <p>{{ post.data.primary }}</p>
      </article>
   </li>
   {% endfor %}
</ul>

<h3>List person</h3>

<ul class="[ person-list ] [ l-rs  grid two ]" data-gap="gap">
   {% for person in collections.people %} 
   <li class="person__item">
      <figure>
         <img rel="preload" class="ratio" 
            src="{{  person.data.image }}" 
            alt="{{  person.data.imageAlt }}
            ">
      </figure>
      <figcaption class="flow">
         <span class="[ person__item__name ] [ h3 ]">{{ person.data.title }}</span>
         <p class="[ person__item__job ] [ text-grey-color ]">{{ person.data.job }}</p>
      </figcaption>
   </li>
   {% endfor %}
</ul>

### industry experts

Use this guide as a foundation to ensure that your code is optimised for good UX.

Keep your skills up-to-date following and reading materials from these industry experts:

*   [Miriam Suzanne](https://www.miriamsuzanne.com/)
*   [Jen Simmons](https://labs.jensimmons.com/)
*   [Una Kravetz](https://una.im/)
*   [Ahmad Shadeed](https://ishadeed.com/)
*   [Rachel Andrew](https://rachelandrew.co.uk/)
*   [Stephanie Eckles](https://moderncss.dev/)
*   [Manuel Matuzovic](https://www.matuzo.at/) + [HTMLell](https://www.htmhell.dev/)
*   [Sara Soueidan](https://www.sarasoueidan.com/)
*   [Andy Bell](https://piccalil.li/blog/)
