import React from "react";

// 컴포넌트 props

// 1) 하드코딩
class List extends React.Component {
  render() {
    return (
      <div>
        <h1>한국의 아티스트</h1>
        <ul>
          <li>악동뮤지션</li>
          <li>방탄소년단</li>
          <li>걸스데이</li>
          <li>나인뮤지스</li>
          <li>트와이스</li>
          <li>모모랜드</li>
        </ul>
      </div>
    );
  }
}


// // 2) 컴포넌트 분리
// class Artists extends React.Component {
//   render() {
//     return (
//       <ul>
//         <li>악동뮤지션</li>
//         <li>방탄소년단</li>
//         <li>걸스데이</li>
//         <li>나인뮤지스</li>
//         <li>트와이스</li>
//         <li>모모랜드</li>
//       </ul>
//     );
//   }
// }

// class List extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>한국의 아티스트</h1>
//         <Artists />
//       </div>
//     );
//   }
// }


// // 3) props 렌더링하기
// class Artists extends React.Component {
//   render() {
//     const { list } = this.props;
//     return (
//       <ul>
//         {list.map((item) => {
//           const { id, name } = item;
//           return (
//             <li key={id}>{name}</li>
//           );
//         })}
//       </ul>
//     );
//   }
// }

// class List extends React.Component {
//   render() {
//     const artists = [
//       {
//         id: 0,
//         name: '악동뮤지션'
//       },
//       {
//         id: 1,
//         name: '방탄소년단',
//       },
//       {
//         id: 2,
//         name: '걸스데이'
//       },
//       {
//         id: 3,
//         name: '나인뮤지스',
//       },
//       {
//         id: 4,
//         name: '트와이스',
//       },
//       {
//         id: 5,
//         name: '모모랜드'
//       }
//     ];

//     return (
//       <div>
//         <h1>한국의 아티스트</h1>
//         <Artists list={artists} />
//       </div>
//     );
//   }
// }

export default List;