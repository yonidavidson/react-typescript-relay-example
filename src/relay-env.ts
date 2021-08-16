import {
  Environment,
  Network,
  RecordSource,
  RequestParameters,
  Store,
  Variables
} from 'relay-runtime';

const url = 'https://countries.trevorblades.com/'

function fetchQuery(
  operation: RequestParameters,
  variables: Variables,
) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default environment;
