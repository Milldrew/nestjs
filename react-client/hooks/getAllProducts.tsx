import { useEffect, useState } from "react";

export function useGetAllProducts() {
  console.log("hello, from get all products");
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:8080/products");
        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.error(error);
      }
    })();
  });
  /*
  useEffect(() => {});
  */
}
