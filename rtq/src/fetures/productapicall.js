import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  endpoints: (build) => ({
    getAllProduc: build.query({
      query: () => `get-all-products`,
    }),
    addPost: build.mutation({
      query:(data)=>({
        url:"add-data",
        method:"post",
        body:data
      })
  
    }),
      DeletePost:build.mutation({
        query:(id)=>({
          url:`/delete/${id}`,
          method:"delete"
        })
      }),
      UpdatePost:build.mutation({
        query:(id,data)=>({
          url:`/update-product/${id}`,
          method:"put",
          body:data
        })
      })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProducQuery,useAddPostMutation,useDeletePostMutation,useUpdatePostMutation} = productApi