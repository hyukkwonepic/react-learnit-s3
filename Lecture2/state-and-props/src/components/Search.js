import React from "react";

// 1) 하드 코딩
class SearchBar extends React.Component {
  render() {
    return <input />;
  }
}

class Search extends React.Component {
  render() {
    return (
      <div>
        <div>검색어: ?? </div>
        <SearchBar />
      </div>
    );
  }
}


// // 2) 상위 컴포넌트가 state를 관리
// class SearchBar extends React.Component {
//   render() {
//     return <input />;
//   }
// }

// class Search extends React.Component {

//   state = {
//     keyword: ''
//   }

//   render() {
//     const { keyword } = this.state;
//     return (
//       <div>
//         <div>검색어: {keyword}</div>
//         <SearchBar />
//       </div>
//     );
//   }
// }


// // 3) 상위 컴포넌트가 이벤트 핸들러 생성
// class SearchBar extends React.Component {
//   render() {
//     return <input />;
//   }
// }

// class Search extends React.Component {

//   state = {
//     keyword: '',
//   }

//   // input의 입력 이벤트를 핸들링할 메소드
//   handleChange = (e) => {
//     console.log('호출!');
//   };

//   render() {
//     const { keyword } = this.state;
//     return (
//       <div>
//         <div>검색어: {keyword}</div>
//         <SearchBar />
//       </div>
//     );
//   }
// }


// // 4) 상위 컴포넌트 핸들러 및 값 props로 전달
// class SearchBar extends React.Component {
//   render() {
//     return (
//       <input
//         value={this.props.keyword}
//         onChange={this.props.onChange}
//       />
//     );
//   }
// }

// class Search extends React.Component {

//   state = {
//     keyword: ''
//   }

//   // input의 입력 이벤트를 핸들링할 메소드
//   handleChange = (e) => {
//     console.log('호출!');
//   };

//   render() {
//     const { keyword } = this.state;
//     return (
//       <div>
//         <div>검색어: {keyword}</div>
//         <SearchBar
//           keyword={keyword}
//           onChange={this.handleChange}
//         />
//       </div>
//     );
//   }
// }


// // // 5) 핸들러에서 setState
// class SearchBar extends React.Component {
//   render() {
//     return (
//       <input
//         value={this.props.keyword}
//         onChange={this.props.onChange}
//       />
//     );
//   }
// }

// class Search extends React.Component {

//   state = {
//     keyword: ''
//   }

//   // input의 입력 이벤트를 핸들링할 메소드
//   handleChange = (e) => {
//     const value = e.target.value;
//     this.setState({
//       keyword: value
//     });
//   };

//   render() {
//     const { keyword } = this.state;
//     return (
//       <div>
//         <div>검색어: {keyword}</div>
//         <SearchBar
//           keyword={keyword}
//           onChange={this.handleChange}
//         />
//       </div>
//     );
//   }
// }

export default Search;