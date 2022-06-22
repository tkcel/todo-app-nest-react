import { ItemStatus } from './item-status.enum';

export interface Item {
  id: string;
  body: string;
  status: ItemStatus;
  createdAt: string;
  updatedAt: string;
}
