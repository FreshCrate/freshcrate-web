import { Spinner, Stack } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Stack
      justify="center"
      align="center"
      height="200px"
      my={"10rem"}
      mx={"auto"}
    >
      <Spinner size="xl" />
    </Stack>
  );
};

export default Loader;
