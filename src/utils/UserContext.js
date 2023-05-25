import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Sasi",
    email: "skreddysasi776@gmail.com",
  }
});

export default UserContext;
