import {Dayjs} from "dayjs";

export default interface TaskModel {
  readonly Id: string;
  readonly Task: string;
  readonly Date: Dayjs | null;
}