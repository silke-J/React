import { useLocalStorage } from "@uidotdev/usehooks";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";

const useAuth = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
 const [user, setUser] = useLocalStorage("user",{})
 const [auth, setAuth] = useLocalStorage("auth",{})
  //SignIn
  const signIn = async (e) => {
     e.preventDefault();

    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3043/auth/signin", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify({ email, password }),
      });
  console.log(response);
      if (!response.status === "error") {
        throw new Error("Failed to signIn");
      }
    

      const result = await response.json();
      setUser(jwtDecode(result.data.token))
      console.log(user);
     setAuth(result.data)
      console.log(result)
      return result;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };




 

  return {
    user,
    auth,
    signIn,
    error,
    isLoading,
    setEmail,
    setPassword,
  };
};

export default useAuth ;
