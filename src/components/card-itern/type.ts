export type ICardBGColor = 'gray' | 'blue';
export type ICaculateProps = {
  taskDone: number;
  taskTotal: number;
};
export type ICaculatePercentage = (props: ICaculateProps) => number;
