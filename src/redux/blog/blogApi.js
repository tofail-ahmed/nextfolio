const { baseApi } = require("../baseApi");

const projectApi=baseApi.injectEndpoints({
      endpoints:(builder)=>({
            allBlog:builder.query({
                  query:()=>({
                        url:"/blog",
                        method:"GET"
                  }),
                  providesTags:['blogs']
            })
      })
})