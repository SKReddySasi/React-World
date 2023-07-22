import { createContext, Context } from "react";

// Define the type for the context value
export interface UserContextValue {
  user: string;
}

// Create the context with the specified type for the context value
const UserContext: Context<UserContextValue> = createContext<UserContextValue>({
  user: "Sasi",
});

export default UserContext;
