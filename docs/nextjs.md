# Nextjs

Nextjs 를 사용하면서 얻은 지식들을 정리할 예정
무조건 필요한 디렉토리는 /pages, /public 이 두가지이다.

### Pages

디렉토리 구조에는 pages/ 가 포함되어있어야하고, 라우팅은 각각 이 내부에 있는 파일의 이름을 따라갈 수 있다.

### 내장 컴포넌트

#### Link

```js
import Link from 'next/link';

const App = () => {
  return (
    <Link href="/link">
      <a>link</a>
    </Link>
  )
}
```
Link 테그는 무조건 href 에만 영향 받으머, title 등의 속성에는 유의미한 변화가 없음. 위와 같은 방식으로 쓰임