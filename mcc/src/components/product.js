import React, {StyleSheet} from 'react';

function ComponentProject() {
  return (
    <div class="blog-post card product">
  <img src="{{ product.image }}" alt="{{ product.name }} product image" class="product__image card-img-top">
  <div class="product__information">
    <h2 class="product__title">{{ product.name }}</h2>
    <p class="product__description">{{ product.content | remove: '<p>' | remove: '</p>' }}</p>
    {% include product_definition.html %}
  </div>
</div>
  );
}

const styles = StyleSheet.create({
});

export default ComponentProject;
