import { createReducer, on } from '@ngrx/store';

import {
  createGroupAction,
  createGroupFailedAction,
  createGroupSuccessfulAction,
  deleteGroupAction,
  deleteGroupFailedAction,
  deleteGroupSuccessfulAction,
  getGroupAction,
  getGroupFailedAction,
  getGroupSuccessfulAction,
  updateGroupList,
  updateGroupListFailure,
  updateGroupListSuccess
} from '../actions/group.actions';
import { GroupState } from '../models/group.models';

export const initialStateGroup: GroupState = {
  groups: [],
  loading: false,
  error: null,
  groupId: {
    groupID: '',
    type: ''
  }
};

export const groupReducer = createReducer(
  initialStateGroup,
  on(getGroupAction, (state): GroupState => ({ ...state, loading: true })),
  on(
    getGroupSuccessfulAction,
    (state, groupAction): GroupState => ({
      ...state,
      groups: groupAction.Items,
      loading: false
    })
  ),
  on(
    getGroupFailedAction,
    (state, { error }): GroupState => ({
      ...state,
      error,
      loading: false
    })
  ),
  on(createGroupAction, (state): GroupState => ({ ...state, loading: true })),
  on(
    createGroupSuccessfulAction,
    (state, action): GroupState => ({
      ...state,
      groups: [...state.groups, action],
      loading: false,
      error: null
    })
  ),
  on(
    createGroupFailedAction,
    (state, { error }): GroupState => ({
      ...state,
      error,
      loading: false
    })
  ),

  on(deleteGroupAction, (state): GroupState => ({ ...state, loading: true })),
  on(deleteGroupSuccessfulAction, (state, groupId): GroupState => {
    const updatedListGroup = state.groups?.filter(
      (group) => group.id.S !== groupId.groupID
    );
    return {
      ...state,
      groups: updatedListGroup,
      error: null,
      loading: false
    };
  }),
  on(
    deleteGroupFailedAction,
    (state, { error }): GroupState => ({
      ...state,
      error,
      loading: false
    })
  ),

  on(updateGroupList, (state): GroupState => ({ ...state, loading: true })),

  on(
    updateGroupListSuccess,
    (state, action): GroupState => ({
      ...state,
      groups: action.Items,
      loading: false
    })
  ),

  on(
    updateGroupListFailure,
    (state, { error }): GroupState => ({
      ...state,
      error,
      loading: false
    })
  )
);
