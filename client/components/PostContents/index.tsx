import React from "react";
import hljs from "highlight.js";
import markdown from "markdown-it";

import * as S from "./style";

const PostContents = ({
  contents,
}: {
  contents: string;
}): React.ReactElement => {
  console.log(contents);
  return (
    <>
      <S.ContentsContainer>
        <div dangerouslySetInnerHTML={{ __html: md.render(contents) }} />
      </S.ContentsContainer>
    </>
  );
};

const md = new markdown({
  highlight: (str: string, lang: string): string => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          '<pre class="hljs"><code>' +
          hljs.highlight(lang, str, true).value +
          "</code></pre>"
        );
      } catch (__) {}
    }

    return (
      '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + "</code></pre>"
    );
  },
});

export default PostContents;
