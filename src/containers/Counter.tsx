import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { add, decrement, increment } from "../actions/counter";
import Counter from "../components/Counter";
import { CounterState } from "../reducer";

interface StateProps {
  count: number;
}

interface DispatchProps {
  add: (amount: number) => void;
  decrement: () => void;
  increment: () => void;
}

// 参照したい Store State の値をコンポーネントの Props にマッピングする
// 慣習的に mapStateToProps という名前で書かれることになっている。
const mapStateToProps = (state: CounterState): StateProps => ({
  count: state.count
});

// 発行したい Action を生成する Action Creator 関数を Props にマッピングする
// Props 関数名と Action Creator の関数名がそれぞれ同じになるように定義してあるのでプロパティ名をショートハンドで省略できる。
// 慣習的に mapDispatchToProps という名前で書かれることになっている。
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators({ add, decrement, increment }, dispatch);

// bindActionCreators を使わない場合
// const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
//   add: amount => dispatch(add(amount)),
//   decrement: () => dispatch(decrement()),
//   increment: () => dispatch(increment())
// });

// connect という HOC に 2 つの map 関数とマッピング対象のコンポーネントを渡すと、
// 定義した Props へのマッピングが有効になった新しいコンポーネントが返される
export default connect(mapStateToProps, mapDispatchToProps)(Counter); // カリー化されている
