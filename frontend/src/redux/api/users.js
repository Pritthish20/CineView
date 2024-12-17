import { apiSlice } from "./apiSlice";
import { USER_URL } from "../constants";

export const userApiSlice=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        login:builder.mutation({
            query:(data)=>({
                url:`${USER_URL}/auth`,
                method: 'POST',
                body: data,
            }),
        }),
        logout:builder.mutation({
            query:()=>({
                url:`${USER_URL}/logout`,
                method: 'POST',
            }),
        }),
        register:builder.mutation({
            query:(data)=>({
                url:`${USER_URL}`,
                method: 'POST',
                body: data,
            }),
        }),
        profile:builder.mutation({
            query:(data)=>({
                url:`${USER_URL}/profile`,
                method: 'PUT',
                body:data,
            }),
        }),
        getUsers: builder.query({
            query: () => ({
              url: `${USER_URL}`,
            }),
          }),
    }),
});

export const {
    useLoginMutation,
    useLogoutMutation,
    useRegisterMutation,
    useProfileMutation,
    useGetUsersQuery
}=userApiSlice;