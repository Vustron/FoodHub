import { useQuery } from "@tanstack/react-query";
import qs from "query-string";
import axios from "axios";

interface Query {
  size?: string;
  isFeatured?: boolean;
  cuisine?: string;
  category?: string;
  kitchen?: string;
}

interface Props<T> {
  STORE?: string;
  URL?: string;
  queryKey?: string;
}

export const useGet = <T>(query: Query, props: Props<T>) => {
  // extract props
  const { STORE, URL, queryKey } = props;
  // extract query
  const { size, isFeatured, cuisine, category, kitchen } = query;

  // query string url
  const url = qs.stringifyUrl({
    url: URL!,
    query: {
      size: size,
      isFeatured: isFeatured,
      cuisine: cuisine,
      category: category,
      kitchen: kitchen,
    },
  });

  return useQuery<T[]>({
    queryKey: [queryKey, STORE, query],
    enabled: !!STORE,
    queryFn: async () => {
      const { data } = await axios.get(url);
      return data;
    },
  });
};
