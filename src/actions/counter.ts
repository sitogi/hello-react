// Redux の Action とそれを生成する Action Creator と呼ばれる関数群を定義している。
export enum CounterActionType {
  ADD = "COUNTER/ADD",
  DECREMENT = "COUTNER/DECREMENT",
  INCREMENT = "COUTNER/INCREMENT"
}

// Action はそのやらせたいことの種類と実行時に必要なデータを内包した、ただの JS のオブジェクト
export interface CounterAction {
  type: CounterActionType;
  amount?: number;
}

export const add = (amount: number): CounterAction => ({
  amount,
  type: CounterActionType.ADD
});

export const decrement = (): CounterAction => ({
  type: CounterActionType.DECREMENT
});

export const increment = (): CounterAction => ({
  type: CounterActionType.INCREMENT
});
