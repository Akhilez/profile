import React from "react"
import { Box, Heading, Progress, Text } from "@chakra-ui/react"
import { useQuery } from "react-query"

export const Blogs = () => {
  const url =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@akhilez"

  const { isLoading, error, data } = useQuery("mediumData", () =>
    fetch(url).then(res => res.json(), { cacheTime: 1000 * 60 * 5 })
  )

  console.log(data)

  const profileUrl = data?.feed?.url

  // TODO: Limit the # of articles to 5 or so and add links etc.

  return (
    <Box>
      <Heading variant="section">Blogs</Heading>
      {isLoading && <Progress size="xs" isIndeterminate />}
      {data && (
        <Box>
          {data?.items.map(article => (
            <Text>{article?.title}</Text>
          ))}
        </Box>
      )}
    </Box>
  )
}
