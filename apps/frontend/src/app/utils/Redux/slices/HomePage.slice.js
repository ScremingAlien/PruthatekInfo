import { createSlice } from '@reduxjs/toolkit'

export const HomeSlice = createSlice({
     name: 'counter',
     initialState: {

          is_user_logged_in: false,
          followings: [],
          isVerifying: false,
          user_data: {
               user_id: "",
               username: '',
               avatar: '',
               accountType: ''
          },

          updateBlogData: {
               title: '',
               thumbnail: '',
               subTitle: '',
               content: '',
               tags: [],
               timeRequired: 1,
          }

     },
     reducers: {

          setUserLoginStatus: (state, action) => {
               state.is_user_logged_in = action.payload
          },

          setUpdateBlogData: (state, action) => {
               state.updateBlogData = action.payload
          },

          setUserLoginDetails: (state, action) => {

               state.user_data = {
                    user_id: action.payload.user_id,
                    username: action.payload.username,
                    avatar: action.payload.avatar,
                    accountType: action.payload.accountType
               }

          },
          setFollowings: (state, action) => {
               state.followings = action.payload
          },
          setisVerifying: (state, action) => {
               state.isVerifying = action.payload
          },
     },
})

// Action creators are generated for each case reducer function
export const { setUserLoginStatus, setUserLoginDetails, setFollowings, setisVerifying, setUpdateBlogData } = HomeSlice.actions

export const HomeSliceReducers = HomeSlice.reducer