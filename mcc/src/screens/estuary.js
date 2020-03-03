import React, {StyleSheet} from 'react';
import EstuarySidebar from "../components/estuary_sidebar";

function ScreenEstuary() {
  return (
<!--- Estuary -->
<div class="row">
  <div class="col-lg-8 col-md-4">
    <!-- Blog Posts -->
    <ul>
      <div class="row">
        {% for post in paginator.posts %}
        <div class="card blog-post">
          <img class="card-img-top" src="/theme/posts/{{ post.thumbnail }}" alt="{{ post.title }}">
          <div class="card-body center">
            <img src="/theme/{{ site.author_logo }}" class="author-profile-img">
            <h4 class="card-title">{{ post.title }}</h4>
            <h6 class="card-subtitle mb-2 text-muted">{{ post.date | date: "%b %-d, %Y" }}</h6>
            <p class="card-text">{{ post.summary }} </p>
            <a href="{{ post.url | prepend: site.baseurl }}" data-disqus-identifier="{{ post.url }}"
              class="btn btn-primary btn-lg">Read</a>
            <span class="disqus-comment-count" data-disqus-identifier="{{ post.url }}"></span>
          </div>
        </div>
        {% endfor %}
      </div>
    </ul>
    <div class="row center">
      <!-- Pagination links -->
      {% if paginator.total_pages > 1 %}
      <ul class="pagination pagination-sm">
        {% if paginator.previous_page %}
        <li><a href="{{ paginator.previous_page_path | prepend: site.baseurl | replace: '//', '/' }}">&laquo;</a></li>
        {% else %}
        <li class="disabled"><span aria-hidden="true">&laquo;</span></li>
        {% endif %}
        <li><a href="/">First</a></li>
        {% for page in (1..paginator.total_pages) %}
        {% if page == paginator.page %}
        <li class="active"><a>{{ page }}<span class="sr-only">(current)</span></a></li>
        {% elsif page == 1 %}
        <li><a href="/">{{ page }}</a></li>
        {% else %}
        <li><a
            href="{{ site.paginate_path | prepend: site.baseurl | replace: '//', '/' | replace: ':num', page }}">{{ page }}</a>
        </li>
        {% endif %}
        {% endfor %}
        <li><a href="/page/{{ paginator.total_pages }}/">Last</a></li>
        {% if paginator.next_page %}
        <li><a href="{{ paginator.next_page_path | prepend: site.baseurl | replace: '//', '/' }}">&raquo;</a></li>
        {% else %}
        <li class="disabled"><span>&raquo;</span></li>
        {% endif %}
      </ul>
      {% endif %}
    </div>
  </div>
  <EstuarySidebar />
</div>
);
}

const styles = StyleSheet.create({
});

export default ScreenEstuary;