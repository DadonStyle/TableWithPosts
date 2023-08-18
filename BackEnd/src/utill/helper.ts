export const handlePagination = (
  pageSize: number,
  pageCount: number,
  dataArr: any[],
) => {
  if (dataArr.length < 1) return dataArr;
  const lastIndex = pageCount * pageSize;
  const firstIndex = lastIndex - pageSize;
  return dataArr.slice(firstIndex, lastIndex);
};
