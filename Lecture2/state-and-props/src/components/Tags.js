import React from "react";

// 1) 하드코딩
class List extends React.Component {
  render() {
    return (
      <div>
        <h1>태그</h1>
        <div>이태원카페</div>
        <div>신사동맛집</div>
        <div>가을코디</div>
      </div>
    );
  }
}

class Adder extends React.Component {
  render() {
    return (
      <div>
        <input />
        <button>추가</button>
      </div>
    );
  }
}

class Tags extends React.Component {
  render() {
    return (
      <div>
        <List />
        <Adder />
      </div>
    );
  }
}


// // 2) tags state 생성 및 렌더링
// class List extends React.Component {
//   render() {
//     const { list } = this.props;
//     return (
//       <div>
//         <h1>태그</h1>
//         {list.map((item, i) => {
//           return <div key={i}>{item}</div>;
//         })}
//       </div>
//     );
//   }
// }

// class Adder extends React.Component {
//   render() {
//     return (
//       <div>
//         <input />
//         <button>추가</button>
//       </div>
//     );
//   }
// }

// class Tags extends React.Component {

//   state = {
//     tags: [
//       '이태원카페',
//       '신사동맛집',
//       '가을코디'
//     ]
//   }

//   render() {
//     const { tags } = this.state;
//     return (
//       <div>
//         <List list={tags} />
//         <Adder />
//       </div>
//     );
//   }
// }


// // 3) newTag state 관리 및 이벤트 핸들링
// class List extends React.Component {
//   render() {
//     const { list } = this.props;
//     return (
//       <div>
//         <h1>태그</h1>
//         {list.map((item, i) => {
//           return <div key={i}>{item}</div>;
//         })}
//       </div>
//     );
//   }
// }

// class Adder extends React.Component {
//   render() {
//     return (
//       <div>
//         <input value={this.props.value} onChange={this.props.onValueChange} />
//         <button>추가</button>
//       </div>
//     );
//   }
// }

// class Tags extends React.Component {

//   state = {
//     tags: [
//       '이태원카페',
//       '신사동맛집',
//       '가을코디'
//     ],
//     newTag: 'asdf',
//   }

//   handleNewTag = (e) => {
//     const value = e.target.value;
//     this.setState({ newTag: value });
//   }

//   render() {
//     const { tags, newTag } = this.state;
//     return (
//       <div>
//         <List list={tags} />
//         <Adder value={newTag} onValueChange={this.handleNewTag} />
//       </div>
//     );
//   }
// }


// // 4) newTag를 tags 배열에 추가하기
// class List extends React.Component {
//   render() {
//     const { list } = this.props;
//     return (
//       <div>
//         <h1>태그</h1>
//         {list.map((item, i) => {
//           return <div key={i}>{item}</div>;
//         })}
//       </div>
//     );
//   }
// }

// class Adder extends React.Component {
//   render() {
//     return (
//       <div>
//         <input value={this.props.value} onChange={this.props.onValueChange} />
//         <button onClick={this.props.onAddValue}>추가</button>
//       </div>
//     );
//   }
// }

// class Tags extends React.Component {

//   state = {
//     tags: [
//       '이태원카페',
//       '신사동맛집',
//       '가을코디'
//     ],
//     newTag: '',
//   }

//   handleNewTag = (e) => {
//     const value = e.target.value;
//     this.setState({ newTag: value });
//   }

//   handleAddNewTag = () => {
//     this.setState({
//       tags: [
//         ...this.state.tags,
//         this.state.newTag
//       ],
//       newTag: '',
//     });
//   }

//   render() {
//     const { tags, newTag } = this.state;
//     return (
//       <div>
//         <List list={tags} />
//         <Adder
//           value={newTag}
//           onValueChange={this.handleNewTag}
//           onAddValue={this.handleAddNewTag}
//         />
//       </div>
//     );
//   }
// }

export default Tags;