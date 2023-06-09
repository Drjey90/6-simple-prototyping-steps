---
layout: "_layouts/base.njk" 
title: "CSS architecture"
tags: ["guidelines"]

subtitle: "Speed-up developement time with a clear CSS structure"
primary_msg: "A modern approach to speed up development time, support performance, scalability and maintainability."
description: "A modern approach to speed up development time, support performance, scalability and maintainability."

pageNumber: '5'
previousUrlText: 'Performance'
previousUrl: '/performance'
nextUrl: '/modern-css'
nextUrlText: 'Modern CSS'
---

As websites can get bigger, keeping your CSS codebase clean, scalable, maintainable, and light is critical to support performance and speed-up development time.

### Problem: Bad CSS structure leads to chaos

Without a clear logic for organising your CSS, it's easy to end up with a **chaotic system** and **heavy CSS files** — with duplicated properties — that highly impact your site's performance and user experience.

Also, without a consistent CSS architecture, navigating through the CSS can become a nightmare for you or any other developer that needs to work on your stylesheets.

### Solution: Organise your CSS files

To **gain efficiency** and **optimise your CSS for performance**, architect your CSS files in a way that embraces CSS Cascading and inheritance.

The main idea of this approach is to build your pages from components. Think at component level—or blocks when you work with styles to build your UI. Only use page-specific CSS to adjust layout styles.

Our process of writing and structuring CSS files is based on [SASS](https://sass-lang.com/) and takes inspiration from the [CUBE CSS Methodology](https://cube.fyi/).

We use this approach to build a clean CSS codebase, by using the power of the CSS cascade algorithm and inheritance.

#### Overview of our CSS files architecture

 <pre class="code-block"><code>Sass/
        
1. base/
        _mixins.scss
        _reset.scss
        _settings.scss
        _system.scss
        
        page/
          _global.scss
          _header.scss
          _footer.scss
        
        typography/
          _links.scss
          _paragraphs.scss
          _headings.scss
          _lists.scss
          _tables.scss
          _other.scss
          
2. utilities/
        _colour.scss
        _center.scss
        _container.scss
        _dropcap.scss
        _grid.scss
        _radius.scss
        …
        
3. blocks/
        _buttons
        _hero.scss
        _footer
        _header.scss
        …
        
4. site-specific/
        _about.scss
        _article.scss
        …
        
styles.scss

</code></pre>

<h3>File structure breakdown</h3>

<p>Let’s detail each folder and files:</p>

<ul class="[ tab-items ][ flow l-rs ]">
<li class="flow">
  <details class="[ tab-item ][ flow ]">
   <summary class="bg-primary-color"> <h4 class="h5 subtitle">1. Base</h4></summary>   
  
  <header class="flow">
      
  <p><strong>This layer includes the high-level CSS rules, the foundation styles and global custom properties variables of the design.</strong></p>
  </header>
  
  <h5 class="text-primary-color">_settings.scss:</h5>
  <p>This file contains the global variables for foundation styles of the website<em>(e.g. spacing, color, typography…).</em></p>

  <h5 class="text-primary-color">_mixings.scss</h5>
  
  <p>This file includes chunks of reusable CSS rules like media query breakpoints or a rule for specifying static font sizes.</p>
  
  <h5 class="text-primary-color">_reset.scss</h5>
  
  <p>This file contains the <a href="https://andy-bell.co.uk/a-modern-css-reset/">Modern CSS Reset file</a> from Andy Bell to reset the default browsers’ styles and avoid any inconsistencies across different browsers.</p>
  
  <h5 class="text-primary-color">_system.scss</h5>
  
  <p>This file contains all the CSS rules required to adjust the styles of the admin interface of your website.</p> 
  
  <h5 class="text-primary-color">page/</h5>
  
  <p>This folder contains page global, header and footer layout styles. These rules are organised under the following partial files:</p>
   
  <ul class="content-list">
  <li>_global.scss</li>
  <li>_header.scss</li>
  <li>_footer.scss</li>
  </ul>
  
  <h5 class="text-primary-color">typography/</h5>
  
  <p>This folder contains partial files with CSS rules of common typographic elements such as <em>paragraphs, links or headings</em>.</p>
    
  <ul class="content-list">
  <li>_links.scss</li>
  <li>_paragraphs.scss</li>
  <li>_headings.scss</li>
  <li>_lists.scss</li>
  <li>_tables.scss</li>
  <li>_other.scss</li>
  </ul>
  
</li>


<li class="flow">
  <details  class="[ tab-item ][ flow ]">
   <summary class="bg-primary-color"> <h4 class="[ subtitle ][ h5 ]">2. Utilities</h4></summary>   
  
  
  <header class="flow">
    
   <p><strong>This layer includes a list of helper classes that consist of a single CSS rule or a group of related CSS rules useful to style multiple elements consistently and quickly.</strong></p>

  </header>
  
  <p>To avoid repeating CSS rules, we use utility classes when appropriate to style HTML elements consistently.</p>
  
  <p>Utility classes can contain a single property or a group of related CSS properties to define text colors, background colours, border radius, drop caps, borders or any other reusable style.</p>

</li>

<li class="flow">
  <details  class="[ tab-item ][ flow ]">
   <summary class="bg-primary-color"> <h4 class="[ subtitle ][ h5 ]">3. Blocks</h4></summary>   
  
  
  <header class="flow">
    
    <p><strong>This layer contains files with specific CSS rules for each Building blocks that compose the layout.</strong></p>
  
  </header>
  
  <p>Blocks refer to a simple UI element like a button or a group of UI elements like a card, hero section or menu. The CSS rules are applied using the parent block class.</p>
  
  <p>The benefit of styling a component using the block class is that the block will maintain its original style, regardless of the context it's placed in.</p>
    
</li>

<li class="flow">
  <details class="[ tab-item ][ flow ]">
   <summary class="bg-primary-color"> <h4 class="[ subtitle ][ h5 ]">4. Site specific</h4></summary>   
 
  <header class="flow">
    
  <p><strong>This layer contains the CSS rules applied with the parent body class to style specific page—or content type layouts.</strong></p>

  </header>
  
  <p>This folder contains the partials files of individual pages, content-types or templates, including their specific CSS rules required to adjust/override the layout styles.</p> 

</li>

<li class="flow">
  <details class="[ tab-item ][ flow ]">
   <summary class="bg-primary-color"> <h4 class="[ subtitle ][ h5 ]">styles.scss</h4></summary>   
  
  
  <header class="flow">
    
  <p><strong>This file includes the imported partials to generate the final <code class="code">style.css</code> file.</strong></p>

  </header>
  
  <p>The <code class="code">style.scss</code> file is the source file where we import the required <code class="code">.scss</code> partials to create the final <code class="code">style.css</code> file that the browser will use to load the styles of your website.</p>
    
<pre class="code-block"><code>➜  assets sass --watch sass:css</code></pre>

<p>This command tells SASS to preprocess the SASS files that are located inside <code class="code">/assets</code> and output the final css inside the folder <span class="code">/css</span>.</p>

</li>
</ul>
    </details>

<div class="[ cta-btn ][ outline ]">
  <a href="https://github.com/Drjey90/6-simple-steps-design-examples/archive/refs/heads/main.zip">♠️  Download directly the boilerplate template here</a>
</div>

<h3>Takeaways</h3>

<ul class="content-list">
  <li>Write high-level CSS and global variables inside <code class="code">/base</code></li>
  <li>Use utility classes to style common elements consistently</li>
  <li>Add content-block styles inside their partial file inside <code class="code">/blocks</code></li>
  <li>Add page or template-specific CSS inside <code class="code">/site-specific</code></li>
  <li>Keep your CSS styles light</li>
</ul>

<section class="[ resources ][ grid--4-5 grid ]" data-gap="gap">
          <div class="[ resources__links ][ flow ]">
<h3>Resources</h3>

<ul class="content-list">
<li><a href="https://www.youtube.com/watch?v=5uhIiI9Ld5M&ab_channel=Hey%21Presents">Andy Bell: Browser’s Mentor, Not Micromanager + Cube CSS</a></li>
<li><a href="https://cube.fyi/#how-does-cube-css-compare-to-other-methodologies">CUBE CSS Methodology</a></li>
<li><a href="https://www.mikeaparicio.com/posts/2023-05-22-why-were-bad-at-css/?utm_source=convertkit&utm_medium=email&utm_campaign=It%27s+OK+to+Use+Modern+CSS.+Really%2C+really.+%7C+ModernCSS+Newsletter+%2361%20-%2010833447" target="_blank">Why are we bad at CSS?</a></li>
</ul>
</div>
            {% include 'partials/_book.njk' %}
      </section>