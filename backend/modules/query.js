export const query = {
  select: (table) => {
    return `select*from ${table}`;
  },
};
