export function formatQuery(query: any) {
  const page = query?.page ? Number(query.page) : 1;
  const limit = query?.limit ? Number(query.limit) : 20;

  query?.limit && delete query.limit;
  query?.page && delete query.page;

  return {
    page,
    limit,
    query,
  };
}
