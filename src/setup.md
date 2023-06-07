---
layout: "_layouts/base.njk" 
title: "Project Setup"

page:
  subtitle: "Setup a clean base to build your project under the right foundation"
  primary_msg: "Start by setting up your project folder and organise your files following a clear structure to work efficiently."
  description: "Build your project under the right foundation with a clear file architecture, HTML, JS, CSS and other assetsto gain efficiency and performance."

pagesubnav:
  pageNumber: '2'
  nextUrl: '/semantic-html/'
  nextUrlText: 'HTML & Accessibility'
  previousUrlText: 'Home'
  previousUrl: '/'
---

Since your website will require HTML, stylesheets, and media content to work, you will be required to make changes in various places to implement your designs.

### The problem

Without a clear file architecture, updating files can become a pain and impact your efficiency; a bad site structure and naming convention can also affect SEO.

To prevent these issues, organise your project's files properly and use a clear naming convention to name your files.

### The solution

This is how we generally structure any web project:

<pre class="code-block">
  <code>Index.html
  About.html
  contact.html      
  assets
  ├── css (style.css)
  ├── img (images and icons) 
  ├── fonts (includes your fonts if hosted locally)
  ├── js (specific scripts files)
  └── sass (individual CSS partials)
  </code>
</pre>

_We will dive deep into the structure of our SASS folder and explain how you can use partials to generate your end CSS file._

### Checklist

#### Make sure to check each points
 
 <ol class="[ special-list ][ special-list--checklist bg-white-color ]">
    <li>Did we organise properly our assets files?</li>
    <li>Do we have SASS correctly configured?</li>
    <li>Did we organise our HTML files properly?</li>
    <li>Can we self-host our fonts?</li>
    <li>Do we have a clear naming convention for our files?</li>
</ol>

<h3>Takeaways</h3>

*   Create a `/assets` folder to host all your assets files
*   Put your _images_, _CSS_, _fonts_ and _js_ files inside their respective folders
*   Put your local fonts inside a `/fonts` sub-folder
*   Use _SASS_ to write and organise well your _CSS_
*   Keep your _HTML_ files at the root of your project
*   Use lowercases and hyphens to name your files

<section class="[ resources ][ grid--4-5 grid ]" data-gap="gap">
          <div class="[ resources__links ][ flow ]">
            <h3>Resource</h3>
            <p>Links for further reading:</p>
            <ul class="content-list">
              <li><a href="https://sass-lang.com/install">Install Sass</a></li>
              <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files">Dealing with files</a></li>
            </ul>
        </div>
            {% include 'partials/_book.njk' %}
      </section>