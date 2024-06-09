const { baseApi } = require("../baseApi");

const projectApi=baseApi.injectEndpoints({
      endpoints:(builder)=>({
            allProject:builder.query({
                  query:()=>({
                        url:"/projects",
                        method:"GET"
                  })
            }),
            createProject:builder.mutation({
                  query:(body)=>({
                        url:"/project",
                        method:"POST",
                        body
                  }),
                  invalidateTags:["projects"]
            })
      })
})
export const {useAllProjectQuery,useCreateProjectMutation}=projectApi;