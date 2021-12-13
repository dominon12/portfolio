/**
 * Class to paginate an array
 *
 * @class Paginator
 * @template T
 */
class Paginator<T> {
  /**
   * Paginated array
   *
   * @private
   * @type {T[][]}
   * @memberof Paginator
   */
  private arr: T[][];
  private pageSize: number;

  /**
   * Creates an instance of Paginator
   * and divides passed array param to
   * 'size' number of chunks
   * @param {T[]} arr array to paginate
   * @param {number} size page size
   * @memberof Paginator
   */
  constructor(arr: T[], size: number) {
    this.pageSize = size;
    this.arr = this.chunkify(arr, size);
  }

  /**
   * Returns requested page
   *
   * @param {number} pageNum number of the page
   * @return {*} chunk - requested page
   * @memberof Paginator
   */
  public getPage(pageNum: number): T[] {
    const pageIndex = pageNum - 1;
    const requestedPage = this.arr[pageIndex];
    return requestedPage;
  }

  /**
   * Get accessor for
   * the first page.
   *
   * @readonly
   * @memberof Paginator
   */
  public get firstPage() {
    return this.getPage(1);
  }

  /**
   * Get accessor for
   * the last page.
   *
   * @readonly
   * @memberof Paginator
   */
  public get lastPage() {
    const lastPageIndex = this.arr.length;
    return this.getPage(lastPageIndex);
  }

  /**
   * Divides passed array to chunks
   *
   * @private
   * @param {any[]} arr array to chunkify
   * @param {number} size number of items in one chunk
   * @return {*}  {any[][]}
   * @memberof Paginator
   */
  private chunkify(arr: any[], size: number): any[][] {
    const chunks = [];
    const n = arr.length;
    let i = 0;

    while (i < n) {
      chunks.push(arr.slice(i, (i += size)));
    }

    return chunks;
  }
}

export default Paginator;
