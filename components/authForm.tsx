import { Box, Flex, Input, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { useSWRConfig } from "swr";
import { auth } from "../lib/mutations";
import styles from "../styles/Home.module.css";

const AuthForm: FC<{ mode: "signin" | "signup" }> = function authForm({
  mode,
}) {
  // state set up
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await auth(mode, { email, password, firstName, lastName });
    setIsLoading(false);
    router.push("/");
  };

  return (
    <Box height="100vh" width="100vw" className={styles.container}>
      <Flex
        justify="center"
        align="center"
        height="100px"
        className={styles.title}
      >
        edView
      </Flex>
      <Flex justify="center" align="center" height="calc(75vh - 100px)">
        <Box padding="center" borderRadius="6px" width="calc(45vh - 50px)">
          <form onSubmit={handleSubmit}>
            <input
              placeholder="email"
              type="email"
              className="w-70 mb-5 block"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="password"
              type="password"
              className="w-70 mb-5 block"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              isLoading={isLoading}
              sx={{ "&:hover": { bg: "#0070f3" } }}
            >
              {mode}
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthForm;
