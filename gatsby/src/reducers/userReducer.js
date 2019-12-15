//@todo: Actions.js contients les types dans des contantes en majuscules
export const userReducer = (state, action) => {
    switch (action.type) {
        case "updateUserProfile": {
            return { ...state, profile: action.payload };
        }
        default: {
            throw new Error("This reducer action does not exist");
        }
    }
};