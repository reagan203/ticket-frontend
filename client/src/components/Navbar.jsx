import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Flex justify="center" >
      <Breadcrumb fontWeight="medium" fontSize="m" spacing="8">
        <BreadcrumbItem>
          <Link to="/">HOME</Link>
        </BreadcrumbItem>
        
        <BreadcrumbItem isCurrentPage>
          <Link to="/registration">REGISTRATION</Link>
        </BreadcrumbItem>
      </Breadcrumb>
    </Flex>
  );
};
