import React, {StyleSheet} from 'react';

function ScreenPost() {
  return (
<!--- Post --->
<!-- Post Breadcrumbs -->
{%- include estuary_post_breadcrumb.html -%}

<div class="row">

  <div class="col-lg-8">

    {%- include estuary_post_article.html -%}

    {%- include estuary_post_comments.html -%}
  </div>

  {%- include estuary_sidebar.html -%}



</div> <!-- End of row-->
);
}

const styles = StyleSheet.create({
});

export default ScreenPost;