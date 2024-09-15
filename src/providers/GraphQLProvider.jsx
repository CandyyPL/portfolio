import { GraphQLClient, ClientContext } from 'graphql-hooks'

const client = new GraphQLClient({
  url: 'https://graphql.datocms.com/',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_DATOCMS_KEY}`,
  },
})

const GraphQLProvider = ({ children }) => {
  return <ClientContext.Provider value={client}>{children}</ClientContext.Provider>
}

export default GraphQLProvider
