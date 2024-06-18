import { useQuery, useQueryClient } from "@tanstack/react-query";
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
  const queryClient = useQueryClient();
  const { size, isFeatured, cuisine, category, kitchen } = query;

  // query string url
  const url = qs.stringifyUrl({
    url: props.URL!,
    query: { size, isFeatured, cuisine, category, kitchen },
  });

  const fetchQueryData = async () => {
    const { data } = await axios.get(url);
    return data;
  };

  // Clear cache and refetch function
  const clearCacheAndRefetch = async () => {
    await queryClient.invalidateQueries({
      queryKey: [props.queryKey, props.STORE],
    });
    queryClient.setQueryData(
      [props.queryKey, props.STORE, query],
      fetchQueryData,
    );
  };

  const queryData = useQuery<T[]>({
    queryKey: [props.queryKey, props.STORE, query],
    queryFn: fetchQueryData,
  });

  return {
    ...queryData,
    clearCacheAndRefetch,
  };
};
