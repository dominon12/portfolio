import InfiniteQueue from "./InfiniteQueue";

const queueSize = 6;
let infiniteQueue = new InfiniteQueue(queueSize);

describe("Infinite queue", () => {
  beforeEach(() => {
    infiniteQueue = new InfiniteQueue(queueSize);
  });

  it("Initializes with correct values", () => {
    expect(infiniteQueue.queue).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("Moves to the right", () => {
    infiniteQueue.moveRight();

    expect(infiniteQueue.firstElement).toEqual(6);
    expect(infiniteQueue.queue[queueSize - 1]).toEqual(5);
  });

  it("Moves to the left", () => {
    infiniteQueue.moveLeft();

    expect(infiniteQueue.firstElement).toEqual(2);
    expect(infiniteQueue.queue[queueSize - 1]).toEqual(1);
  });
});
