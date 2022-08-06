import express from "express";
import { AddressInfo } from "net";
import ServiceRegistry from "../lib/registry";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json([
    { title: "Product 01", image: "" },
    { title: "Product 02", image: "" },
    { title: "Product 03", image: "" },
  ]);
});

const listener = app.listen(0, () => {
  const address = listener.address() as AddressInfo;
  console.log(`Server running on ${address.port}`);

  ServiceRegistry.register({
    name: "products",
    ip: address.address,
    port: address.port,
  });
});