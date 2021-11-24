import React, { useEffect, useState } from "react";

import InfiniteQueue from "../Services/InfiniteQueue";

/**
 * Encapsulates logic of initializing 
 * a new instance of InfiniteQueue class
 * on size param changes
 * 
 * @param {number} size queue length
 * @return {*} 
 */
const useInfiniteQueue = (size: number) => {
  const [queue, setQueue] = useState<InfiniteQueue>(new InfiniteQueue(size));

  useEffect(() => {
    const nextQueue = new InfiniteQueue(size);
    setQueue(nextQueue);
  }, [size]);

  return queue;
};

export default useInfiniteQueue;
