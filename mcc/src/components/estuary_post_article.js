import React, {StyleSheet} from 'react';

function ComponentEstuaryPostArticle() {
  return (
<article class="card" itemscope itemtype="http://schema.org/BlogPosting">
  <div class="card-header">
    <!-- <h1 class="post-title" itemprop="name headline">{{ page.title }}</h1> -->
    <h4 class="post-meta">{{ page.summary }}</h4>
    <p class="post-summary">Posted by : {% if page.author %}
      <img src="/theme/{{ site.author_logo }}" class="author-profile-img">
      <span itemprop="author" itemscope itemtype="http://schema.org/Person">
        <span itemprop="name">{{ page.author }}</span>
      </span>{% endif %} at
      <time datetime="{{ page.date }}" itemprop="datePublished">{{ page.date | date: "%b %-d, %Y" }}</time>
    </p>
    <span class="disqus-comment-count" data-disqus-identifier="{{ page.url }}"></span>
    <div class="post-categories">
      {% if post %} {% assign categories = post.categories %} {% else %} {% assign categories = page.categories %}
      {% endif %}
      Category : {% for category in categories %}
      <a href="{{site.baseurl}}/blog/categories/{{category|slugize}}">{{category}}</a>
      {% unless forloop.last %}&nbsp;{% endunless %} {% endfor %}
    </div>
  </div>
  <div class="card-body" itemprop="articleBody">
    <img class="card-img-top" src="/theme/posts/{{ page.thumbnail }}" alt="{{ post.title }}">
    <br /> <br />
    {{ content }}
  </div>
  <div id="disqus_thread"></div>
</article>
  );
}

const styles = StyleSheet.create({
});

export default ComponentEstuaryPostArticle;