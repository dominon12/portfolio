import React, { useEffect, useState } from "react";

import InfiniteQueue from "../Services/InfiniteQueue";

const useInfiniteQueue = (size: number) => {
  const [queue, setQueue] = useState<InfiniteQueue>(new InfiniteQueue(size));

  useEffect(() => {
    const nextQueue = new InfiniteQueue(size);
    setQueue(nextQueue);
  }, [size]);

  return queue;
};

export default useInfiniteQueue;
