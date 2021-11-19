class InfiniteQueue {
  private _queue: number[] = [];

  constructor(queueSize: number) {
    this.initializeQueueValues(queueSize);
  }

  public get queue() {
    return this._queue;
  }

  public get firstElement() {
    return this._queue[0];
  }

  public moveRight(): void {
    // moves item from the beginning to the end of the queue
    const lastItem = this._queue.pop();
    if (lastItem) {
      this._queue.unshift(lastItem);
    }
  }

  public moveLeft(): void {
    // moves item from the end to the beginning of the queue
    const firstItem = this._queue.shift();
    if (firstItem) {
      this._queue.push(firstItem);
    }
  }

  private initializeQueueValues(queueSize: number) {
    // initializes queue attribute with numbers from 1 to queueSize
    console.log("init");
    for (let i = 0; i < queueSize; i++) {
      this._queue.push(i + 1);
    }
    console.log({ _queue: this._queue });
  }
}

export default InfiniteQueue