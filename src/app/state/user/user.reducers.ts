import * as fromUser from './user.actions';
import { User } from './user.interface';

export interface State {
  user: User;
  users: User[];
  loading: boolean;
  error: string;
}

export const initialState: State = {
  user: {
    id: 0,
    login: '',
    avatar_url: '',
    name: '',
    bio: '',
    company: '',
    location: '',
    blog: '',
  },
  users: [],
  loading: false,
  error: '',
};

export function UserReducer(
  state = initialState,
  action: fromUser.UserActions
): State {
  switch (action.type) {
    case fromUser.GET_ALL_USERS: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromUser.GET_ALL_USERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    }

    case fromUser.GET_ALL_USERS_FAIL: {
      return {
        ...state,
        loading: false,
        error: 'error loading users',
      };
    }

    case fromUser.GET_USER: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromUser.GET_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }

    case fromUser.GET_USER_FAIL: {
      return {
        ...state,
        loading: false,
        error: 'error loading user',
      };
    }
    default: {
      return state;
    }
  }
}

export const getAllUsers = (state: State) => state.users;
export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;
