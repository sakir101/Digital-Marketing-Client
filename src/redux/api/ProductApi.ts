
import { IMeta, IProduct } from "@/types";
import { tagTypes } from "../tag-types"
import { baseApi } from "./baseApi"


const Product_URL = "/product"
export const productApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        ProductCreate: build.mutation({
            query: ({ data, id }: { data: any; id: string }) => ({
                url: `${Product_URL}/${id}/create-product`,
                method: 'POST',
                data
            }),
            invalidatesTags: [tagTypes.product],
        }),

        getProduct: build.query({
            query: ({ id, arg }: { id: any, arg: Record<string, any> }) => {
                return {
                    url: `${Product_URL}/${id}/get-all`,
                    method: "GET",
                    params: arg,
                };
            },
            transformResponse: (response: IProduct[], meta: IMeta) => {
                return {
                    product: response,
                    meta,
                };
            },
            providesTags: [tagTypes.product]
        }),

        getSingleProduct: build.query({
            query: (id: string | string[] | undefined) => ({
                url: `${Product_URL}/${id}`,
                method: "GET",
            }),
            providesTags: [tagTypes.product],
        }),

        updateProduct: build.mutation({
            query: ({ data, id }: { data: any; id: string }) => ({
                url: `${Product_URL}/${id}/update-product`,
                method: 'PATCH',
                data
            }),
            invalidatesTags: [tagTypes.product],
        }),

        deleteProduct: build.mutation({
            query: ({ id }: { id: string }) => ({
                url: `${Product_URL}/${id}/delete-product`,
                method: 'DELETE',
            }),
            invalidatesTags: [tagTypes.product],
        }),
    }),
})

export const {
    useGetProductQuery,
    useGetSingleProductQuery,
    useProductCreateMutation,
    useUpdateProductMutation,
    useDeleteProductMutation
} = productApi