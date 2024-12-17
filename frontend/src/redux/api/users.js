import { apiSlice } from "./apiSlice";
import { BASE_URL,USER_URL } from "../constants";

export const userApiSlice=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        login:builder.mutation({
            query:(data)=>({
                url:`${BASE_URL}${USER_URL}/auth`,
                method: 'POST',
                body: data,
            }),
        }),
        logout:builder.mutation({
            query:()=>({
                url:`${BASE_URL}${USER_URL}/logout`,
                method: 'POST',
            }),
        }),
        register:builder.mutation({
            query:(data)=>({
                url:`${BASE_URL}${USER_URL}`,
                method: 'POST',
                body: data,
            }),
        }),
        profile:builder.mutation({
            query:(data)=>({
                url:`${BASE_URL}${USER_URL}/profile`,
                method: 'PUT',
                body:data,
            }),
        }),
        getUsers: builder.query({
            query: () => ({
              url: `${BASE_URL}${USER_URL}`,
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