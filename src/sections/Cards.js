import { Flex } from "@chakra-ui/react"
import ProductCard from '../components/ProductCard';


function Cards() {
  return (
  <>

  <Flex px={2} pt={4}>
  <ProductCard />
  <ProductCard/>
  </Flex>

  </>
  );
}

export default Cards;
