---
layout: _layouts/base.njk
tags:
  - guidelines
title: Semantic HTML
subtitle: Work from the content-out to write semantic & accessible HTML.
description: >-
  Code your pages with semantic HTML to enhance accessibility and optimise your
  website for SEO.
primary_msg: >-
  Writing semantic HTML is the foundation for coding pages that are meaningful,
  accessible and optimised for SEO.
date: 2023-06-07T15:10:01.044Z
pageNumber: '3'
previousUrlText: Setup
previousUrl: /setup
nextUrlText: Performance
nextUrl: /performance
---

Now that the assets folder has been created, let’s forget about writing CSS for now. We will get to it once the HTML pages are ready.

### Bad HTML ruins accessibility & SEO

One reason most websites perform poorly is that the web pages have been mainly structured with non-semantic HTML elements like span or div, which makes it hard for screen-readers or users with disabilities to access the content.

### Lay a solid foundation with semantic HTML

To avoid implementing inaccessible pages, use semantic HTML to write meaningful pages and enhance critical aspects like [accessibility, SEO, cross-device compatibility and page load times](https://boagworld.com/dev/semantic-code-in-html/).
 
<h3>Checklist</h3>
<h4 class="[ subtitle ][ text-grey-color ]">Start from the content to write meaningful HTML and set up a good foundation for accessibility.</h4>
       
<ol class="[ special-list ][ special-list--checklist bg-white-color ]">       
  <li>Did we describe every element that is on the page? <em class="text-grey-color">(e.g. Heading? Is it an article? Is it a running text composed of paragraphs? Section? Tab? Menu? Paragraph? Button? Link? List?…)</em></li>
  <li>Did we use a naming convention to name our classes?</li>
  <li>Did we use minimum semantic HTML tags to structure our pages?</li>
  <li>Did we respect the content flow and hierarchy on pages?</li>
  <li>Did we optimise images for screen readers?</li>
  <li>Did we use ARIA to improve accessibility where necessary?</li>
  <li>Did we add ARIA on interactive elements?</li>
  <li>Did we add page descriptions <em>(metatags)</em>?</li>
  <li>Did we structure our <code class="code">&lt;head&gt;</code> section properly?</li>
 </ol>
      
 ### Takeaways

*   Use native semantic HTML tags to markup the content
*   Use a clear naming convention like _BEM Methodology_ to name your classes
*   Don't use unecessary non semantic tags to structure your pages
*   Structure the content with clear headings (e.g. h1, h2, h3, h4…)
*   Use `alt="..."` attributes to describe each images
*   Use ARIA landmark roles and ARIA labels to enhance accessibility
*   Use metatags on `<head>` section to describe your web pages
      
 <section class="[ resources ][ grid--4-5 grid ]" data-gap="gap">
          <div class="[ resources__links ][ flow ]">
            <h3>Resource</h3>
            <p>Links for further reading:</p>
            <ul class="[ content-list ][ content-list--links ]">
              <li><a href="https://web.dev/learn/html/">Learn HTML</a></li>
              <li><a href="https://webaim.org/techniques/semanticstructure/">Semantic Structure</a></li>
              <li><a href="https://www.htmhell.dev/tips/page-descriptions/">Metadata: Page descriptions</a></li>
              <li><a href="https://web.dev/learn/html/headings-and-sections/">Headings and sections</a></li>
              <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">HTML elements reference</a></li>
              <li><a href="https://stuffandnonsense.co.uk/transcending-css-revisited/chapter-4.html">Designing content out</a></li>
              <li><a href="https://getbem.com/naming/">BEM Naming</a></li>
              <li><a href="https://www.htmhell.dev/tips/landmarks/">ARIA Landmark roles</a></li>
              <li><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label">ARIA Label</a></li>
              <li><a href="https://www.smashingmagazine.com/2022/11/guide-keyboard-accessibility-html-css-part1/">Keyboard accessibility</a></li>
            </ul>
           </div>
            {% include 'partials/_book.njk' %}
      </section>
