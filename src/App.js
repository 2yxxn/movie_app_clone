import React from 'react';
/*
상단에 위치
react가 여기에 jsx가 있는 component를 사용하는 것을 이해함
*/
import PropTypes from "prop-types";

/*
props 체크
항상 propTypes으로 이름지어야 함
*/

// class component
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  // state는 object, 바꾸고 깊은 data를 state에 넣음
  
  componentDidMount() {
    // render 다음으로 실행됨
    setTimeout(() => {
      this.setState({isLoading: false});
      /*
      state를 직접적으로 바꾸면 안됨
      setState를 사용하지 않으면 새 state와 함께 render function이 호출되지 않을 거임

      this.setState({count: this.state.count + 1});
      this.setState(current => ({count: current.count - 1}));
      -> 같은 의미
      */
    }, 6000);
    // delay function(JS) : 6초(6000)후에 isLoading(state)를 false로 바꾸겠다
  }

  render() {
    const {isLoading} = this.state;
    // this.state.isLoading할 필요 없음
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

/*
<Food fav="kimchi" />
component(Food)에 property(fav)를 value(kimchi)로 준 거임
*/

export default App;

/*
* {괄호}안에 들어가야 자바스크립트

* map(배열의 함수) : 각 element에 함수를 적용
{foodILike.map(dish => (
  <Food name={dish.name} />
))}

* dish => {} 와 dish => ()의 차이!
{}일 때는 return값을 지정해 주어야 함
()일 때는 괄호 안의 값이 return값
*/