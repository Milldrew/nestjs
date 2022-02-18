import { useEffect, useState } from "react";

export async function createProduct() {
  console.log("create product");
  try {
    const payload = await fetch("http://localhost:8080/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "title",
        description: "description",
        price: 3,
      }),
    });
    console.log(payload);
    payload
      .json()
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  } catch (error) {
    console.error(error);
  }
}
