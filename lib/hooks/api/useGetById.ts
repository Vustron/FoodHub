import { useQuery } from "@tanstack/react-query";
import qs from "query-string";
import axios from "axios";

interface Props<T> {
  STORE?: string;
  URL?: string;
  queryKey?: string;
  id?: string;
}

export const useGetById = <T>(props: Props<T>) => {
  // extract props
  const { STORE, URL, queryKey, id } = props;

  // query string url
  const url = qs.stringifyUrl({
    url: `${URL!}${id}`,
  });

  return useQuery<T>({
    queryKey: [queryKey, STORE],
    enabled: !!STORE && !!id,
    queryFn: async () => {
      const { data } = await axios.get(url);
      return data;
    },
  });
};
