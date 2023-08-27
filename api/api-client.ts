import {OURNET_API_HOST, OURNET_API_KEY} from "@env";
import {createClient} from "./generated-api-client/createClient";

if (!OURNET_API_HOST) throw new Error("OURNET_API_HOST is not defined");

export const createApiClient = () =>
  createClient({
    fetcher: ({query, variables}, fetch) => {
      const body = JSON.stringify({query, variables});
      return fetch(OURNET_API_HOST || "", {
        method: "post",
        body,
        headers: {
          ...{Authorization: OURNET_API_KEY || ""},
          "Content-Type": "application/json",
        },
      }).then((r: any) => r.json());
    },
  });

export default createApiClient();
