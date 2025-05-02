import { useState } from "react";

const useAuth = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  //SignIn
  const SignIn = async (signinData) => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3043/auth/signin", {
        method: "POST",
        body: {
          email:{userEmail},
          password:{userPassword},
        },
      });

      if (!response.status === "error") {
        throw new Error("Failed to signIn");
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    SignIn,
    error,
    isLoading,
  };
};

export { useAuth };
