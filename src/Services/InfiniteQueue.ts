/**
 * Data structure where
 * - the first in queue becomes the last  'moveRight()'
 * - the last in queue becomes the first 'moveLeft()'
 * 
 * @class InfiniteQueue
 */
class InfiniteQueue {
  /**
   * An array of numbers which is 
   * used to keep infinite queue's items
   * 
   * @private
   * @type {number[]}
   * @memberof InfiniteQueue
   */
  private _queue: number[] = [];

  /**
   * Creates an instance of InfiniteQueue
   * and initializes it's '_queue' attribute
   * 
   * @param {number} queueSize length of desired infinite queue
   * @memberof InfiniteQueue
   */
  constructor(queueSize: number) {
    this.initializeQueueValues(queueSize);
  }

  /**
   * Getter for '_queue' attr
   * 
   * @readonly
   * @memberof InfiniteQueue
   */
  public get queue() {
    return this._queue;
  }

  /**
   * Getter for the first queue's element
   * 
   * @readonly
   * @memberof InfiniteQueue
   */
  public get firstElement() {
    return this._queue[0];
  }

  /**
   * Moves item from the beginning to the end of the queue
   * 
   * @memberof InfiniteQueue
   */
  public moveRight(): void {
    const lastItem = this._queue.pop();
    if (lastItem) {
      this._queue.unshift(lastItem);
    }
  }

  /**
   * Moves item from the end to the beginning of the queue
   * 
   * @memberof InfiniteQueue
   */
  public moveLeft(): void {
    const firstItem = this._queue.shift();
    if (firstItem) {
      this._queue.push(firstItem);
    }
  }

  /**
   * Initializes '_queue' attribute with 
   * numbers from 1 to queueSize
   * @private
   * @param {number} queueSize
   * @memberof InfiniteQueue
   */
  private initializeQueueValues(queueSize: number) {
    for (let i = 0; i < queueSize; i++) {
      this._queue.push(i + 1);
    }
  }
}

export default InfiniteQueue;
