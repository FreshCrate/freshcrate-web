import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Box,
  Text,
  HStack,
  IconButton,
  Button,
  Link,
} from "@chakra-ui/react";

import { RxHamburgerMenu } from "react-icons/rx";
import logo from "/assets/images/freshcrate_logo.png";
import { useState } from "react";
import { useEffect } from "react";

interface NavLink {
  name: string;
  href: string;
  isButton?: boolean;
}

const navLinks: NavLink[] = [
  { name: "Meal Kit", href: "#" },
  { name: "About", href: "#" },
  { name: "Our Services", href: "#" },
  { name: "Crowd Funding", href: "#" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(isScrolled);

  return (
    <Box width="full" maxW="8xl" mx="auto" position="relative">
      <Box
        position="fixed"
        bg="white"
        width="full"
        maxW={"8xl"}
        mx="auto"
        zIndex="50"
        borderBottom={isScrolled ? "2px solid" : "none"}
        boxShadow={isScrolled ? "md" : "none"}
        transition="all 0.3s"
      >
        {/* Mobile View */}
        <Box
          className="flex items-center justify-between h-16 px-6 shadow-sm lg:pr-8"
          display={{ base: "flex", md: "none" }}
        >
          {/* Logo */}
          <HStack>
            <a href="#">
              <img
                src={logo}
                alt="FreshCrate Logo"
                className="w-[74px] h-[40px]"
              />
            </a>
          </HStack>

          {/* Mobile Dropdown Menu */}
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Menu"
              icon={<RxHamburgerMenu />}
              variant="ghost"
              fontSize="2xl"
            />
            <MenuList
              bg="white"
              w="100vw"
              p={2}
              m={0}
              borderRadius={0}
              color="gray.900"
              fontSize="md"
              fontWeight="medium"
            >
              {/* Menu Items */}
              {navLinks.map((link) => (
                <MenuItem py={3} key={link.name}>
                  <Text cursor="pointer">
                    <Link href={link.href}>{link.name}</Link>
                  </Text>
                </MenuItem>
              ))}

              <Box py={3}>
                <Button colorScheme="primary" width="full" mt={2}>
                  Contact
                </Button>
              </Box>
            </MenuList>
          </Menu>
        </Box>

        {/* Desktop View */}
        <Box
          className="flex items-center justify-between px-6 shadow-sm lg:px-20 "
          display={{ base: "none", md: "flex" }}
        >
          {/* Logo */}
          <HStack className="h-16 my-4">
            <a href="#">
              <img
                src={logo}
                alt="FreshCrate Logo"
                className="w-[74px] h-[40px]"
              />
            </a>
          </HStack>

          {/* Navigation */}
          <HStack
            spacing={8}
            color="primary.500"
            fontSize="sm"
            fontWeight="medium"
            alignItems="center"
          >
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                {link.name}
              </Link>
            ))}
          </HStack>

          <HStack>
            <Button colorScheme="primary">Contact</Button>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
