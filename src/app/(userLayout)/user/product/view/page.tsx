"use client";

import {
  useDeleteProductMutation,
  useGetProductQuery,
} from "@/redux/api/ProductApi";
import { getUserInfo } from "@/services/auth.service";
import Link from "next/link";
import React, { useState } from "react";

const ViewProduct = () => {
  const query: Record<string, any> = {};

  const { userId } = getUserInfo() as any;

  const { data, isLoading, refetch } = useGetProductQuery(
    {
      id: userId,
      arg: query,
    },
    { refetchOnMountOrArgChange: true }
  );

  const productData = data?.product;
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [deleteProduct] = useDeleteProductMutation();

  const handleDelete = async () => {
    if (selectedProduct) {
      await deleteProduct({ id: selectedProduct });
      refetch();
      setSelectedProduct(null);
    }
  };

  return (
    <div className="flex justify-center items-center w-full flex-wrap">
      {productData?.map((product: any) => (
        <div key={product.id} className="card w-full sm:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-2">Price: ${product.price}</p>
            <p className="text-gray-600 mb-4">Status: {product.status}</p>
            <div className="flex justify-between">
              <Link href={`/user/product/update/${product?.id}`}>
                <button className="btn btn-primary">Update</button>
              </Link>
              <button
                className="btn btn-error"
                onClick={() => setSelectedProduct(product.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Delete Confirmation Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-4">Confirm Delete</h3>
            <p className="mb-4">
              Are you sure you want to delete this product?
            </p>
            <div className="flex justify-end">
              <button
                className="btn btn-secondary mr-2"
                onClick={() => setSelectedProduct(null)}
              >
                Cancel
              </button>
              <button className="btn btn-error" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewProduct;
