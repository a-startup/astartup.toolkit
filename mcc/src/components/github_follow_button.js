import React, {StyleSheet} from 'react';

function ComponentGitHubFollowButton() {
  return (
    <!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/{{site.github_username}}" data-size="large" data-show-count="true"
  aria-label="Follow @{{site.github_username}} on GitHub">Follow @{{ site.github_username }}</a>
  );
}

const styles = StyleSheet.create({
});

export default ComponentGitHubFollowButton;