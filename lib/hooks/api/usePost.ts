import { useMutation, useQueryClient } from "@tanstack/react-query";
import qs from "query-string";
import axios from "axios";

interface Props<T> {
  STORE?: string;
  URL?: string;
  queryKey?: string;
  values?: any;
  userId?: string | null;
}

export const usePost = <T>(props: Props<T>) => {
  // init query client
  const queryClient = useQueryClient();
  // extract props
  const { STORE, URL, queryKey, values, userId } = props;
  // query string url
  const url = qs.stringifyUrl({
    url: URL!,
  });

  return useMutation<T>({
    mutationFn: async () => {
      const { data } = await axios.post(url, {
        products: values,
        userId,
      });

      return data;
    },
    onSuccess: (data: any) => {
      queryClient.invalidateQueries({
        queryKey: [queryKey, STORE],
      });
      window.location.replace(`${data.url}`);
    },
  });
};
