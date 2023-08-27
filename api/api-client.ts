import {createClient} from "./generated-api-client/createClient";

export const createApiClient = () =>
  createClient({
    fetcher: ({query, variables}, fetch) => {
      const body = JSON.stringify({query, variables});
      return fetch(process.env.API_URL || "", {
        method: "post",
        body,
        headers: {
          ...{Authorization: process.env.API_TOKEN || ""},
          "Content-Type": "application/json",
        },
      }).then((r: any) => r.json());
    },
  });

export default createApiClient();
