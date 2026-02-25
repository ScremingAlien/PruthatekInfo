 
const GRAPHQL_API = process.env.NEXT_PUBLIC_GRAPHQL_API;

export async function fetchGraphQL({ operationName, query, variables = {}, cache = 'no-store' }) {
     const response = await fetch(GRAPHQL_API, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          cache,
          body: JSON.stringify({ operationName, query, variables }),
     });

     const result = await response.json();
     return result?.data;
}


