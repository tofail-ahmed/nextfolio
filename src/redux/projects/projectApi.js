const { baseApi } = require("../baseApi");

const projectApi=baseApi.injectEndpoints({
      endpoints:(builder)=>({
            allProject:builder.query({
                  query:()=>({
                        url:"/projects",
                        method:"GET"
                  })
            })
      })
})
export const {useAllProjectQuery}=projectApi;