const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";


let initialState = {
  users: [ ],
  pageSize:20,
  totalCounts:0,
  currentCount:5,
  isFetching:true
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        })
        // id: (...state.users.id
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        })
        // id: (...state.users.id
      };

    case SET_USERS:
      return {
        ...state,
        users: [ ...action.users]
      };
      case SET_CURRENT_PAGE:
      return {
        ...state,
        currentCount: action.currentCount
      };
      case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCounts: action.totalCounts
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

export const follow = userId => {
  return {
    type: FOLLOW,
    userId
  };
};

export const unfollow = userId => {
  return {
    type: UNFOLLOW,
    userId
  };
};

export const setUsers = users => {
  return {
    type: SET_USERS,
    users
  };
};
export const setCurrentCount = currentCount => {
  return {
    type: SET_CURRENT_PAGE,
    currentCount
  };
};
export const setTotalCount = totalCounts => {
  return {
    type: SET_TOTAL_COUNT,
    totalCounts
  };
};

export const toggleIsFetching = isFetching =>{
  return{
    type: TOGGLE_IS_FETCHING,
    isFetching
  }
};

//
// export const addPostActionCreator = () => {
//     return {
//         type: ADD_POST
//     };
// };
// export const updateNewPostTextActionCreator = text => {
//     return {
//         type: UPDATE_NEW_POST_TEXT,
//         newText: text
//     };
// };

export default usersReducer;
