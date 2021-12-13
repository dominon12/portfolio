import Paginator from "./Paginator";

describe("Paginator", () => {
  const pageSize = 5;
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  const paginator = new Paginator(arr, pageSize);

  it("Returns first page", () => {
    const expectedPage = [1, 2, 3, 4, 5];

    expect(paginator.firstPage).toEqual(expectedPage);
  });

  it("Returns last page", () => {
    const expectedPage = [11, 12, 13];

    expect(paginator.lastPage).toEqual(expectedPage);
  });

  it("Returns middle page", () => {
    const expectedPage = [6, 7, 8, 9, 10];
    const middlePage = paginator.getPage(2);

    expect(middlePage).toEqual(expectedPage);
  });
});
