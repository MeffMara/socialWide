const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


let initialState = {
    postselements: [
        {
            id: 1,
            message: "My New`s One",
            likeCount: "10"
        },
        {
            id: 2,
            message: "My New`s Second",
            likeCount: "1"
        },
        {
            id: 3,
            message: "My New`s 3",
            likeCount: "12"
        }
    ],
    newPostText: "it-kamasutra.com"
};

const profileReducer = (state=initialState,action) => {
    switch (action.type) {
        case ADD_POST:
            {let newPost = {
                id: 4,
                message: state.newPostText,
                likeCount: "0"
            };
            let  copyState = {...state};
            copyState.postselements=[...state.postselements];
            copyState.postselements.push(newPost);
            copyState.newPostText = "";
            return copyState;}
        case UPDATE_NEW_POST_TEXT:{
            let  copyState = {...state};

            copyState.newPostText = action.newText;
            return copyState;}
        default:
            return state;
    }

};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    };
};
export const updateNewPostTextActionCreator = text => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    };
};

export default profileReducer;