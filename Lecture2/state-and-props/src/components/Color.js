import React from "react";

// 1) 하드코딩
class Color extends React.Component {
  render() {
    return (
      <div>
        <span>선택한 색깔: RED</span>
        <div>
          <button>RED</button>
          <button>GREEN</button>
          <button>BLUE</button>
        </div>
      </div>
    );
  }
}


// // 2) state 설정
// class Color extends React.Component {

//   state = {
//     selectedColor: 'RED'
//   }

//   render() {
//     return (
//       <div>
//         <span>선택한 색깔: RED</span>
//         <div>
//           <button>RED</button>
//           <button>GREEN</button>
//           <button>BLUE</button>
//         </div>
//       </div>
//     );
//   }
// }


// // 2) state 렌더링
// class Color extends React.Component {

//   state = {
//     selectedColor: 'RED'
//   }

//   render() {
//     const { selectedColor } = this.state;

//     return (
//       <div>
//         <span>선택한 색깔: {selectedColor}</span>
//         <div>
//           <button>RED</button>
//           <button>GREEN</button>
//           <button>BLUE</button>
//         </div>
//       </div>
//     );
//   }
// }


// // 3) 이벤트 핸들링
// class Color extends React.Component {

//   state = {
//     selectedColor: 'RED'
//   }

//   // 버튼 클릭이벤트 핸들러
//   handleClick = (e) => {
//     console.log(e);
//     alert("버튼이 눌렸다!");
//   };

//   render() {
//     const { selectedColor } = this.state;
//     return (
//       <div>
//         <span>선택한 색깔: {selectedColor}</span>
//         <div>
//           <button onClick={this.handleClick}>RED</button>
//           <button onClick={this.handleClick}>GREEN</button>
//           <button onClick={this.handleClick}>BLUE</button>
//         </div>
//       </div>
//     );
//   }
// }


// // 4) 이벤트 핸들링 - 값 접근하기
// class Color extends React.Component {
  
//   state = {
//     selectedColor: 'RED'
//   }

//   // 버튼 클릭이벤트 핸들러
//   handleClick = (e) => {
//     const value = e.target.innerHTML;
//     alert(value);
//   };

//   render() {
//     const { selectedColor } = this.state;
//     return (
//       <div>
//         <span>선택한 색깔: {selectedColor}</span>
//         <div>
//           <button onClick={this.handleClick}>RED</button>
//           <button onClick={this.handleClick}>GREEN</button>
//           <button onClick={this.handleClick}>BLUE</button>
//         </div>
//       </div>
//     );
//   }
// }


// // 5) state 변경하기
// class Color extends React.Component {

//   state = {
//     selectedColor: 'RED'
//   }

//   // 버튼 클릭이벤트 핸들러
//   handleClick = (e) => {
//     const value = e.target.innerHTML;
//     this.setState({
//       selectedColor: value
//     });
//   };

//   render() {
//     const { selectedColor } = this.state;
//     return (
//       <div>
//         <span>선택한 색깔: {selectedColor}</span>
//         <div>
//           <button onClick={this.handleClick}>RED</button>
//           <button onClick={this.handleClick}>GREEN</button>
//           <button onClick={this.handleClick}>BLUE</button>
//         </div>
//       </div>
//     );
//   }
// }


// // 6) 반복되는 엘리먼트에서 state 변경하기
// class Color extends React.Component {

//   state = {
//     selectedColor: 'RED'
//   }

//   // 버튼 클릭이벤트 핸들러
//   handleClick = (e) => {
//     const value = e.target.innerHTML;
//     this.setState({
//       selectedColor: value
//     });
//   };

//   render() {

//     const colors = [
//       {
//         id: 0,
//         name: 'RED'
//       },
//       {
//         id: 1,
//         name: 'GREEN'
//       },
//       {
//         id: 2,
//         name: 'BLUE'
//       }
//     ];
//     const { selectedColor } = this.state;

//     return (
//       <div>
//         <span>선택한 색깔: {selectedColor}</span>
//         <div>
//           {
//             colors.map((item) => {
//               const { id, name } = item;
//               return (
//                 <button key={id} onClick={this.handleClick}>{name}</button>
//               );
//             })
//           }
//         </div>
//       </div>
//     );
//   }
// }

export default Color;