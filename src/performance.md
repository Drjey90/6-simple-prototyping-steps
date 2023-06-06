---
layout: "_layouts/base.njk" 

page:
  title: "Optimise for performance"
  subtitle: "Consider performance right from the beginning"
  primary_msg: "Optimise your site resources to improve page rendering times and deliver content quickly to users."
  description: "Optimise your site for performance to deliver a good experience to users on the website."

pagesubnav:
  pageNumber: '4'
  previousUrlText: 'HTML & Accessibility'
  previousUrl: '/semantic-html'
  nextUrl: '/css-architecture/'
  nextUrlText: 'CSS Architecture'
---

Performance is a crucial aspect of good UX since users must access the content as fast as possible to accomplish their goals.

### Problem: Heavy resources kill UX

Most websites take too much time to load because resources like **scripts, fonts, images** and **CSS** are poorly optimised and therefore drastically increase the weight of pages.

When resources are heavy to download and scripts block the page's rendering, it frustrates users and makes businesses lose sales because the content doesn't show promptly.

### Solution: Optimise your resources

A good way to reduce the total page size of your website and improve page rendering times is to optimise resources like images, scripts, fonts and CSS by following some basic best practices.

<h3>Performance checklist</h3>
<h4 class="text-grey-color">Basics for optimising your interfaces for better performance.</h4>
        
 <ol class="[ special-list ][ special-list--checklist bg-white-color ]">
             <li>Did we optimise our image formats?</li>
             <li>Did we optimise our responsive images?</li>
             <li>Did we prioritise key resources? <em>(e.g images, video, fonts…)</em>? </li>
             <li>Did we lazy-load non-critical images?</li>
             <li>Did we fetch late-found resources?</li>
             <li>Did we eliminate render-blocking scripts?</li>
             <li>Did we warm connections to origins?</li>
             <li>Did we optimise our fonts?</li>
  </ol>
      
### Takeaways

*   Fetch late-found resources with `rel=preload` _(e.g. heavy hero images, fonts...)_
*   Use `fetchpriority=high` to prioritise key resources
*   Lazy load non-critical images with `loading=lazy` _(e.g. images below the fold)_
*   Add decoding="async" to non-critical images
*   Add `async=""` and `defer=""` attributes on inline JS scripts
*   Warm connections to origins with `rel=preconnect` _(connection to third-party sites)_
*   Use inline SVG to display vector elements
*   Use _[Squoosh.app](https://squoosh.app/)_ to compress your images in AVIF or WEBP formats
*   Optimise your responsive images for performance
*   Host your images on _[Cloudinary](https://cloudinary.com/)_ or _[Sirv](https://sirv.com/)_
*   Self-host your fonts
*   Avoid layout shift by applying width and height attributes on these images
      
<section class="[ resources ][ grid--4-5 grid ]" data-gap="gap">
          <div class="[ resources__links ][ flow ]">
            <h3>Resource</h3>
            <p>Links for further reading:</p>
            <ul class="[ content-list ][ content-list--links ]">
              <li><a href="https://imkev.dev/fetchpriority-opportunity">Priority Hints and optimising LCP</a></li>
              <li><a href="https://web.dev/css-web-vitals/#images">Images and Largest Contentful Paint (LCP) </a></li>
              <li><a href="https://github.com/WICG/priority-hints/blob/main/EXPLAINER.md">Priority Hints</a></li>
              <li><a href="https://javascript.info/script-async-defer">Scripts: async, defer</a></li>           
              <li><a href="https://web.dev/learn/design/typography/#font-loading">Font loading</a></li>
              <li><a href="https://web.dev/i18n/en/reduce-webfont-size/">Reduce web font size</a></li>  
              <li><a href="https://everythingfonts.com/subsetter">Subsetting fonts</a></li> 
              <li><a href="https://web.dev/learn/design/responsive-images/">Responsive images</a></li>
              <li><a href="https://www.sarasoueidan.com/blog/optimizing-svg-delivery-with-svg/">Optimizing SVG Text & Image</a></li>
              <li><a href="https://www.htmhell.dev/tips/the-avif-image-format/">The AVIF image format</a></li>
              <li><a href="https://web.dev/browser-level-image-lazy-loading/">Lazy loading for the web</a></li>
              <li><a href="https://squoosh.app/">Squoosh.app</a></li> 
              <li><a href="https://paper.dropbox.com/doc/Performance-Optimization-Strategy-in-2023--B5uliDvfsfq~O8rZ3WmH50gkAg-qWcr7orx2cEWHpLqoLeTC">Performance Optimization Strategy in 2023</a></li> 
            </ul>
          </div>
            {% include 'partials/_book.njk' %}
      </section>