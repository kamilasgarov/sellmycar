import React, { Component } from "react";
import { Box,Image,Badge } from "@chakra-ui/react"
function ProductCard() {
  const property = {
    imageUrl: "https://cdn.bmwblog.com/wp-content/uploads/2016/10/BMW-E46-M3-phoenix-yellow-12-750x500.jpg",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  }

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" mx={2} overflow="hidden">
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            Yeni
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            BMW M3 E46
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          30 000 USD
        </Box>
      </Box>
    </Box>
  )
}
export default ProductCard