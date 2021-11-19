class Paginator<T> {
  private arr: T[][];

  constructor(arr: T[], size: number) {
    this.arr = this.chunkify(arr, size);
  }

  public getPage(pageNum: number) {
    const pageIndex = pageNum - 1;
    const requestedPage = this.arr[pageIndex];
    return requestedPage;
  }

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
