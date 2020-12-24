export enum EGameStates {
  Introduction,
  Instruction,
  Started,
  Finished
}
export interface ICoordinates {
  x: number;
  y: number;
}

export interface ISquare {
  lt: ICoordinates;
  rb: ICoordinates;
}

export enum EColorClasses {
  Gray = 'gray',
  Red = 'red'
}
export enum EHandMode {
  Sponge,
  Detector
}
