import React, {StyleSheet} from 'react';

function ComponentEstuaryTag() {
  return (
    {% for tag in site.tags %} {% capture tag_name %}{{ tag | first }}{% endcapture %}
<div id="#{{ tag_name | slugize }}"></div>
<li class="tag-head">
  <a href="{{ site.baseurl }}/blog/tags/{{ tag_name }}">{{ tag_name }}</a>
</li>
<a name="{{ tag_name | slugize }}"></a>

{% endfor %}
);
}

const styles = StyleSheet.create({
});

export default ComponentEstuaryTag;