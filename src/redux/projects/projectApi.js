const { baseApi } = require("../baseApi");

const projectApi=baseApi.injectEndpoints({
      endpoints:(builder)=>({
            allProject:builder.query({
                  query:()=>({
                        url:"/projects",
                        method:"GET"
                  }),
                  providesTags:['projects']
            }),
            createProject:builder.mutation({
                  query:(body)=>({
                        url:"/project",
                        method:"POST",
                        body
                  }),
                  invalidateTags:['projects']
            }),
            updateProject:builder.mutation({
                  query:({id,body})=>({
                        url:`/projects/${id}`,
                       method:"PUT",
                       body 
                  }),
                  invalidateTags:['projects']
            })
      })
})
export const {useAllProjectQuery,useCreateProjectMutation,useUpdateProjectMutation}=projectApi;