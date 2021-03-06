import React from 'react';

const ComponentStream = (Props) => {
  return (
    <div class="repo-stream">
  <div class="widget-toolbar">
    <ul>
      <li><a href="">Discovery</a></li>
      <li><a href="">Development</a></li>
      <li><a href="">Community</a></li>
      <li><a href="">Funding</a></li>
    </ul>
  </div>
  <p>Hello, world! Welcome to the Astartup Live-stream. There is a super cool app I am You Language (IMUL) scanner,
    productivity, learning, and creativity app in the works that I will release soon. We have a really cool channel
    lined up with lots of educational videos for startups, engineers, inventors, game developers, designers, students,
    and just about anyone who can write and use a computer.</p>
  <div style="text-align: center"><iframe width="560" height="315" src="https://www.youtube.com/embed/zSd55HccdPo"
      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
  </div>
</div>
  );
}

const styles = StyleSheet.create({
});

export default ComponentStream;