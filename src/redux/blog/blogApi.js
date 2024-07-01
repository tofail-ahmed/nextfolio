
const { baseApi } = require("../baseApi");

const blogApi=baseApi.injectEndpoints({
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

export const {useAllBlogQuery}=blogApi;