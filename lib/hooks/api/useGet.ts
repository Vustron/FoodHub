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
  type?: T;
}

export const useGet = <T>(query: Query, props: Props<T>) => {
  // query string url
  const url = qs.stringifyUrl({
    url: props.URL!,
    query: {
      size: query.size,
      isFeatured: query.isFeatured,
      cuisine: query.cuisine,
      category: query.category,
      kitchen: query.kitchen,
    },
  });

  return useQuery<T[]>({
    queryKey: [props.queryKey, props.STORE],
    enabled: !!props.STORE,
    queryFn: async () => {
      const { data } = await axios.get(url);
      return data;
    },
  });
};
