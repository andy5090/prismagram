export const isAuthenticated = request => {
  if (!request.user) {
    throw Error("you need to log in to perform this action");
  }
  return;
};
