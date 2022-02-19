import { useEffect, useState } from "react";

export async function createProduct(productData) {
  console.log({ productData });
  try {
    const payload = await fetch("http://localhost:8080/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productData,
      }),
    });
    payload
      .json()
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  } catch (error) {
    console.error(error);
  }
}
