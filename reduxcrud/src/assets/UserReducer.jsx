import { createSlice } from "@reduxjs/toolkit";

import { userList } from './Data';


const userSlice = createSlice({
    name: 'users',
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            // console.log(action)
            state.push(action.payload)
        },
        updateUser: (state, action) => {
            const { id, name, email } = action.payload;
            console.log('id:', id, 'name', name)
            let t = JSON.stringify(id);
            var d = parseInt(t.replace(/[^0-9]*/g, ''));
            // console.log("change", d)
            const uu = state.find(user => user.id === d);
            if (uu) {
                uu.name = name;
                uu.email = email;
            }
        },
        deleteUser: (state, action) => {
            // console.log("payload delete", action.payload)
            state.splice(state.findIndex((arrow) => arrow.id === action.payload))

        }
    }
})
export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;