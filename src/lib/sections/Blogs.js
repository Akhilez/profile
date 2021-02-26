import React from "react"
import {
  Box,
  Heading,
  Progress,
  Text,
  Link,
  Tag,
  Flex,
  HStack,
  Image,
} from "@chakra-ui/react"
import { useQuery } from "react-query"
import mediumLogo from "../media/medium_logo.png"
import { urls } from "../data/data"

export const Blogs = () => {
  const url =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@akhilez"

  const { isLoading, error, data } = useQuery("mediumData", () =>
    fetch(url).then(res => res.json(), { cacheTime: 1000 * 60 * 5 })
  )

  // TODO: Limit the # of articles to 5 or so and add links etc.

  return (
    <Box>
      <Heading variant="section">Blogs</Heading>
      <Flex as={Link} href={urls.medium.url}>
        <Text>I write articles in Medium</Text>
        <Image src={mediumLogo} alt="Medium" height="24px" />
      </Flex>
      {isLoading && <Progress size="xs" isIndeterminate />}
      {data && (
        <Box>
          {data?.items.slice(0, 5).map(article => (
            <BlogItem key={article.title} article={article} />
          ))}
        </Box>
      )}
    </Box>
  )
}

const BlogItem = ({
  article: { title, pubDate, link, description, categories },
}) => (
  <Box
    my={4}
    maxW="2xl"
    borderWidth="1px"
    borderColor="gray.600"
    p={4}
    borderRadius="md"
  >
    <Flex justify="space-between" align="center">
      <Heading fontSize="xl" mb={2}>
        <Link href={link}>{title}</Link>
      </Heading>
      <Text fontSize="sm" fontWeight="bold" color="gray.400">
        {pubDate}
      </Text>
    </Flex>
    <Text noOfLines={2}>{description.replace(/(<([^>]+)>)/gi, "")}</Text>
    <HStack spacing={2} mt={2}>
      {categories.map(category => (
        <Tag key={category} borderRadius="full">
          {category}
        </Tag>
      ))}
    </HStack>
  </Box>
)
