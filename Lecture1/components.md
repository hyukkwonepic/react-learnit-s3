# 컴포넌트

## 컴포넌트 작성하기

```
class HelloWorld extends React.Component {
  render() {
    return (
      <h1 className='large'>Hello World</h1>
    );
  }
}
```
JSX를 사용하여 작성한 컴포넌트입니다.

```
class HelloWorld extends React.Component {
  render() {
    return (
      React.createElement(
        'h1',
        {className: 'large'},
        'Hello World'
      )
    );
  }
}
```
JSX를 사용하지 않고 작성한 컴포넌트 입니다.

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Hello world</title>
  <!-- Script tags including React -->
  <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.js"></script>
</head>
<body>
  <div id="app"></div>
  <script type="text/babel">
    const app = <h1>Hello world</h1>
    const mountComponent = document.querySelector('#app');
    ReactDOM.render(app, mountComponent);
  </script>
</body>
</html>
```
HTML 스크립트 위에 리액트 컴포넌트를 작성할 수 있습니다. 리액트 패키지와 babel 패키지를 script로 삽입합니다. 그 후 새로운 script 태그 내부에 리액트 코드를 작성합니다.

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Hello world</title>
  <!-- Script tags including React -->
  <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.js"></script>
</head>
<body>
  <div id="app"></div>
  <script type="text/babel">
    class App extends React.Component {
      render() {
        return <h1>Hello from our app</h1>
      }
    }
    ReactDOM.render(<App />, document.querySelector('#app'));
  </script>
</body>
</html>
```
위와 같이<App /> 컴포넌트를 작성했습니다.


## 컴포넌트 분리하기

```
class MyPage extends React.Component {
  render() {
    return (
    <div>
      <img src="https://via.placeholder.com/150" />
      <ul>
        <li>이름: Alex Kwon</li>
        <li>주소: 대한민국 서울</li>
        <li>직업: 한량</li>
        <li>취미: 코딩, 주짓수, 국궁</li>
      </ul>
    </div>
    );
  }
}
```

먼저 위와같이 <MyPage /> 컴포넌트를 작성합니다. 그 후 컴포넌트 내 <ul> 영역을 새로운 컴포넌트로 분리해낼 수 있습니다.

```

class Profile extends React.Component {
  render() {
    return (
      <ul>
        <li>이름: Alex Kwon</li>
        <li>주소: 대한민국 서울</li>
        <li>직업: 한량</li>
        <li>취미: 코딩, 주짓수, 국궁</li>
      </ul>
    );
  }
}

class MyPage extends React.Component {
  render() {
    return (
    <div>
      <img src="https://via.placeholder.com/150" />
      <Profile />
    </div>
    );
  }
}

```
<Profile /> 컴포넌트를 새로 작성한 후에 <MyPage /> 에서 기존의 <ul> 영역을 <Profile />로 대체합니다.