> 부스트캠프 4기 과정을 참여중인, Node.js와 Docker를 좋아하는 주니어 개발자입니다. 이 글은 러닝커브가 높은 Redux를 도입하지 않기 위해 hooks로 Redux의 개념을 따라해본 과정을 담고 있습니다.
> [이 글](https://velog.io/@jdd04026/주니어-개발자의-CICD-도입기-n6k3mkug47) 에 저희 프로젝트가 어떤 것을 하고있는지 담고 있습니다. 간단하게 어떤 프로젝트인지 살펴보시려면 위의 글을 읽어보시는 것을 추천합니다!

Redux는 편리하고 좋아보였습니다. 모든 상태와 그 상태를 변형할 수 있는 방법을 잘 추상화해서 제공해주는 것 같아보였습니다. 또한 엄청난 레퍼런스도 있습니다. 하지만 React를 처음 사용해보는 입장에서, 7주안에 개발을 해야하는데 이런 규모가 큰 라이브러리를 사용하는 것은 배울게 너무 많아서 무리가 있었습니다. 그래서 Hooks를 사용하되 Redux와 같은 개념을 사용해서 개발하려고 생각해본 것들을 담아보았습니다.

## Redux를 어떻게 따라하지?

Redux는 상태관리를 하기 위한 라이브러리이며, 아래의 세가지 규칙을 따릅니다.

1. **하나의 APP, 하나의 Store**
하나의 어플리케이션에는 하나의 스토어를 가지고 있고, 여기서 State를 꺼내 쓰는 방식입니다.

2. **상태를 직접적으로 변화시키지 말아야 한다. 무조건 함수를 통해서만.**
State는 Action을 통해서 직접 변화시켜야 합니다. State는 읽기만 가능하며 절대 이 State를 직접 변경해서는 안됩니다.
이유는 상태의 변화에 의해서 리렌더링을 하는 리엑트의 특성상, 빠르게 렌더링을 하기 위해 Dom의 주소를 Tree 구조로 가지고 있는데 이 변화를 각 노드의 메모리 주소의 변화를 통해 인지합니다! 따라서 State를 함수를 사용하지 않고 변경하면 메모리 주소가 변경되지 않을 수 있기 때문에 원하는 일이 일어나지 않을 수도 있습니다. (Object.create나 Object.assign 등을 통해서 새로운 객체를 만들어서 주소를 변경해줘야 합니다! )

3. **상태를 변경하는 함수는 순수해야합니다.**
절대적으로 외부에 의해 영향을 받으면 안됩니다. 같은 입력에 같은 출력을 반환해야 합니다.

위의 세가지 규칙이 Redux를 사용할 때 지켜야 할 규칙입니다.

Redux의 예제를 잘 살펴보면 **Store**와 **Action**이 있습니다. Store는 각각의 상태들을 한곳에서 관리할 수 있는 상태 저장소이고, Action은 Store에 저장된 상태를 적절히 바꿔줄 수 있는 순수함수인 Reducer들이 모여있는 곳입니다. 각각의 컴포넌트들은 Store의 상태를 사용해서 정보를 보여주고 유저가 버튼을 클릭하는등의 행동을 할 경우 Reducer를 통해 State를 바꿔주는 형식입니다.

잘 살펴보면 2, 3은 금방 따라할 수 있었습니다. 바로 hooks을 이용하는 것입니다!

## Hooks API

원래 React는 Class Component 안에 있는 this.state에서 컴포넌트 내의 상태를 관리했고, 이것을 수정하면서 리렌더링이 일어나도록 했습니다. 순수하게 React 컴포넌트가 상태를 가지려면 Class가 되어야 했습니다.
하지만 Hooks API가 도입되면서 함수 컴포넌트도 State를 가질 수 있게 되었습니다!

예를 들면 아래와 같습니다.

```javascript
function Btn() {
  const [date, setDate] = useState(0);//여기서 0은 초기값입니다. 
 
  return (
    <button onClick={() => setDate(date+1)}>{date}<button/>
  ); 
}
```
컴포넌트는 위처럼 매우 쉽게 상태를 가질 수 있게 되었습니다. useState로 말이죠! 위의 코드를 보시면 어느정도 보이시겠지만, 버튼을 클릭하면 기존 date를 1 증가시키고, Button의 내부 값은 버튼을 클릭할 때마다 1씩 증가합니다!

redux와 비슷하게 Reducer도 생겼습니다! useState와 다른점이라면, Action과 Value를 받을 수 있는 Dispatcher라는 친구를 반환한다는 것 입니다. State를 미리 정해진 규칙에 따라 바꿔줄 수 있는 함수입니다. 아래와 같이 사용하면 좋습니다!

```javascript
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    default:
      throw new Error();
  }
}

function Btn() {
  const [state, dispatcher] = useReducer(reducer, initialArg)
  return (
    <button onClick={() => dispatcher({type: 'increment'})}>
      {date}
	<button/>
  ) 
}
```
useState와 비교해보면, 어떤 일을 하는지 조금 더 명확하게 명령해줄 수 있습니다. 이것은 조금 더 복잡한 로직을 수행하는 함수가 있을 때 유용하게 쓰일 수 있습니다.

위와 같이 상태를 dispatcher를 통해 변경 가능하고, state는 순수하게 리렌더링을 위해 쓰이는 등, Redux의 2, 3번 조건은 hooks가 충분히 해결해 주었습니다. 하지만 문제는 1번, Store 였습니다.

## Atomic Design Pattern

저희 팀에는 Test를 매우매우매우 좋아하시는 분이 한명 있습니다.. (맨 위에 올려놓은 이전 글 링크를 들어가보시면 좋습니다.) 그 분은 모든 컴포넌트가 재활용 될 수 있는 Atomic Design Pattern 을 도입했습니다. 엄청나게 이상적인 패턴이죠.. 간단히 설명하자면 아래와 같습니다.

![atomicdesignpattern.png](https://images.velog.io/post-images/jdd04026/09527fd0-18aa-11ea-960b-0991973d88dc/atomicdesignpattern.png)

> 저희가 만든 컴포넌트들을 패턴에 맞게 조합해놓았습니다.
> 저희 팀의 [스토리북](https://storybook-bookus.netlify.com)을 보시면 조금 더 명확하게 이해가 되실 수 있습니다.

이런식으로 여러 작은 컴포넌트들이 모여 큰 구조가 되는 구조입니다. 각각의 컴포넌트는 다른 컴포넌트를 만들기 위해 재사용될 수 있습니다. 하지만 문제점은, 컴포넌트는 재사용되어야 하기에 고유한 기능이 아닌 이상 State를 가지고 있으면 안되었고, 설령 State를 가지고 있더라도 변경이 일어나면 부모에게 알려주기가 너무 까다로웠습니다.

따라서 저희는 이 문제를 해결하려, 더이상 재사용을 하지 않는 레벨인 Page가 모든 상태와 View의 정보를 다 가지고 아래로 뿌려주기로 했습니다. 겉으로 볼때는 꽤 괜찮았습니다. 하지만 내부적으로는 너무 많은 정보가 담겨있었죠.

먼저 재사용을 위한 View 정보를 주입해야 했습니다. 저희는 Typescript를 사용했고, 각각의 컴포넌트 type을 정의했는데, 재사용을 하면서 하위 타입에 대한 정보를 상위 타입이 상속해서 가지고 있었고, 마지막 단계인 Page에서 사용한 모든 타입들을 한번에 주입했습니다. 이로써 객체의 부피가 커지지만 재사용이 명확히 가능했습니다.

문제는 Page가 너무 비대했습니다. 게다가, 테스트가 가능하지 않았습니다. 각각의 상태는 무조건 Page에 종속적이고 종속되어있으면 테스트가 힘들었습니다. 저희는 테스트를 못하는 상태를 무척이나 싫어했고 이것을 분리해야만 했습니다.

## 드디어 나왔다 Store!

Redux 설계 조건 1번인 Store입니다. 컴포넌트에 종속적이지 않으며, 하나만 존재합니다. (물론 두개 존재할 수도 있다고 되어있습니다.)

저희는 기본 개념인 상태가 모여있는 전역 저장 공간인 Store와 함께 어디에든 붙일 수 있는 독립적인 저장소의 개념을 동시에 가져가려고 했습니다.

먼저 저희는 스토어가 독립적으로 동작할 수 있게 해야 했습니다. 각각의 상태를 Props로 넘겨준다면 재사용이 불가해지기에 Context API를 사용했습니다. Context API는 Provider로 감싸진 하위 컴포넌트들이 Provider에서 제공해주는 값들을 사용할 수 있게 해주는 친구입니다.

![ContextAPI.png](https://images.velog.io/post-images/jdd04026/6a9e9bd0-18b8-11ea-9488-59fe864c6080/ContextAPI.png)

따라서 아래와 같이 Store를 설계해보았습니다.
```javascript
// AccountStore.tsx
export const AfterLoginState = createContext<string>('');
export const AfterLoginAction = createContext<Dispatch<string>>(() => {});

export function AccountStore({ children }: { children: React.ReactElement }) {
  const [loginCallbackState, setLoginCallback] = useState<string>('');

  return (
    <AfterLoginState.Provider value={loginCallbackState}>
      <AfterLoginAction.Provider value={setLoginCallback}>
        {children}
      </AfterLoginAction.Provider>
    </AfterLoginState.Provider>
  );
}
```
이 function Component는 순수하게 Children으로 사용할 수 있는 컴포넌트를 주입받아서 Context API를 통해서 이 주입된 Children에서 State와 Dispatcher를 뽑아쓸 수 있게 해주었습니다.
어떤 컴포넌트이던 Children 안에 감싸지기만 하면 이 Store에서 주입해주는 값을 뽑아서 쓸 수 있었습니다!

Reducer 같은 경우에는 따로 CustomHooks라는 디렉토리에 함수를 정의해놓았습니다. (redux로 치면 Action이 될 것 같습니다.) 정말 순수하게 함수와 dispatcher만 가지고 있었습니다.

이제 Page는 다음과 같은 구조를 통해서 View를 그릴 수 있게 되었습니다!
```javascript
// SignUp/index.tsx
function SignUpPage(): React.ReactElement {
  return (
    <StoreProvider>
      <View />
    </StoreProvider>
  );
}
```
모든 Page의 구조가 위처럼 Store가 View를 Children으로 받아서 View로 들어간 컴포넌트가 Store에서 제공해주는 값들을 사용할 수 있게 했습니다.

View에서는 useContext를 통해 StoreProvider가 제공해주는 값들을 사용할 수 있습니다.
```javascript
function SignUpView(): React.ReactElement {
  const dispatcher = useContext(SignUpAction);

  const Button = {
    onClick: () => {
      dispatcher({ type: 'submit', value: true });
    },
  };

  return (
    <SignUpTemplate content={<Button={Button} />}/>
  );
}
```
위처럼 dispatcher를 Store에서 꺼내서 Action을 수행할 수 있습니다.

이제는 전역 Store를 만들어야 했습니다. 사실 간단합니다. Page Store의 개념을 그대로 사용하면 됩니다! 먼저 위에 써놓은 AccountStore.ts 코드와 모양으로 Store를 만듭니다.

```javascript
// GlobalStore/index.tsx
export default function GlobalStore({children}: {children: React.ReactElement}) {
  return (
    <AfterLoginStoreProvider>
      <AccountStoreProvider>
        {children}
      </AccountStoreProvider>
    </AfterLoginStoreProvider>
  );
}
```
Store는 종류에 따라 여러개가 생길 수 있기에, 종류에 따라 Store를 만들어서 한곳에 감싸놓습니다.
위처럼 Provider를 모아두는 index 를 만든 뒤에,

```javascript
// App.tsx
import GlobalStoreProvider from 'stores';

const App: React.FC = () => (
  <GlobalStoreProvider>
    <ThemeProvider theme={defaultTheme}>
      <Router>
        ...
      </Router>
    </ThemeProvider>
  </GlobalStoreProvider>
);
```
App.tsx를 감싸버립니다. 이제 모든 컴포넌트가 전역 스토어에서 제공하는 값을 사용할 수 있게 되었습니다. 따라서 각각의 Page에선 필요한 State와 Dispatcher를 전역 스토어에서 꺼내 사용할 수 있게 되었습니다! 

최종적으로 모든 프로젝트의 생김세는 아래와 같은 모양이 되었습니다.

```ts
- components
	|- atoms
    |- molecules
    \- organisms
- pages
	|- Signup
    	|- store.tsx
    	|- view.tsx
    	\- index.tsx
    |- Login
    \- ...
- stores
	|- accountStore.tsx
    |- ...
    \- index.tsx // 이곳에서 모든 Store를 다 내려줍니다.
- hooks
	|- base // 전역으로 사용되는 reducer를 모아둡니다.
        |- accountReducer.ts
        |- ...
        \- index.ts
	|- meta // 특별하게 사용되는 reducer를 모아둡니다.
- App.tsx // App은 GlobalStore를 가지고 있습니다.
```
결론적으로는 전역 스토어도 존재하며, Page별로 개별적인 Store도 존재해서 유연하게 사용될 수 있도록 만들었습니다!

## 느낀점

### Atomic Pattern
Atomic 구조의 장점은 이미 만들어진 UI컴포넌트를 쉽게 조합해서 사용할 수 있어서 UI의 개발 속도가 엄청나게 빠르다는 점이었습니다. 이미 Base Component에 대한 정의가 끝나있다면, Page를 만드는 것은 일도 아닐만큼 빠르게 진행되었습니다.

하지만 State의 관리 문제가 너무 복잡해졌습니다. 컴포넌트간의 통신을 거의 무조건 Page를 통해 일어나는 구조라 Page의 로직이 조금 커진 감이 있습니다. Store를 통해서 State의 관리를 view의 주입과 분리시키기는 했지만 Component에서 독립적으로 가질 수 있는 것 조차 패턴으로 인해 Page가 가지고 있는 느낌이 있었습니다.

개선을 할 수 있는 시기가 있다면 각각 작은 단위의 레벨에서 State를 가질 수 있도록 만들어봐야 겠습니다. Class 컴포넌트를 이용해서 각각의 객체를 가질 수 있게 만들면 해결이 될 수 있을 것 같습니다.

### Redux
프로젝트가 커지면 Redux를 이용해야 할 것 같습니다. 저희가 따라해본 Store와 Action 의 개념은 너무나 추상화가 덜 되어서 사용이 자유롭지만 그만큼 패턴화가 될 수 없는 것이 단점입니다. 사람이 많아지고 협업이 늘어나고 예외가 생기기 시작하면 코드가 난잡해지기에 그것을 제한해줄 수 있는 친구가 필요할 것 같습니다.

## 마치면서..

얼떨결에 Redux처럼 만들어보기는 했지만 아직은 개선이 많이 필요한 코드입니다. React를 사용해본지 두달도 채 안되었지만, 어느정도 규모있는 프로젝트를 통해 재미있는 시도를 하는 것이 좋습니다!

사실 구현하고 나서는 Redux를 따라했다기 보다는, Redux의 개념을 적용해보았다고 쓰는것이 맞는 것 같습니다. 그치만 제목은 조금.. 어그로를 끌어야... (크흠)

공부를 해보니 Hooks가 결국은 Redux의 개념을 몇가지 가져온 것 처럼 보이기도 합니다. 그래서 Redux의 전역 스토어를 쉽게 흉내낼 수 있었던 것 같습니다.

글에 코드가 들어가면 집중이 안되는 느낌이 있어서 적게만 넣어보았습니다. 정말 만약에라도 저희 팀의 경험을 코드로써 살펴보고 싶으신 분들을 위해 아래에 링크를 남기겠습니다.

[Bookus! Repository](https://github.com/connect-foundation/2019-12) - 프로젝트 코드입니다.
[스토리북](https://compassionate-swartz-fe4719.netlify.com) 링크입니다.

읽어주신 모든 분들에게 감사드립니다! 마지막으로 Atomic의 기반을 완벽하게 잡아주었던 저희 팀원들에게 감사 인사를 올립니다!