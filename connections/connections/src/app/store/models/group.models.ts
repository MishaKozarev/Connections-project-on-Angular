import { ErrorFailed } from 'src/app/core/models/core.models';

export interface GroupState {
  groups: GroupItem[];
  loading: boolean;
  error: ErrorFailed | null;
  groupId: {
    groupID: string;
    type: string;
  };
}

export interface Group {
  Count: number;
  Items: GroupItem[];
}

export interface GroupItem {
  id: { S: string };
  name: { S: string };
  createdAt: { S: string };
  createdBy: { S: string };
}

export interface GroupCreateById {
  groupID: string;
}

export interface CustomGroup {
  name: string;
  createdAt: string;
  createdBy: string;
}

export interface GroupName {
  name: string;
}
