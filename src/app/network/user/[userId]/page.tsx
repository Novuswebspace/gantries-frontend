"use client";

import Spinner from "@/components/globals/spinner";
import axios from "@/lib/axios";
import { getAllTags, getUserByID } from "@/service/apiservice";
import { useQuery } from "@tanstack/react-query";

export default function Page({ params }: { params: { userId: string } }) {
  const { data, isFetching, error } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUserByID(params.userId),
    enabled: !!params.userId,
    staleTime: 5 * 1000,
  });

  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: getAllTags,
  });

  console.log(data?.data, error);
  console.log(postQuery.data);

  if (isFetching || postQuery.isFetching) {
    return (
      <div className="h-screen grid place-items-center">
        <Spinner size="4rem" />
      </div>
    );
  }
  return <div>hello</div>;
}
