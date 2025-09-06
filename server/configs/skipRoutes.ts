const skipRoutes = [
  "/admin/v1/verify",
  "/admin/v1/login",
  "/admin/v1/create/user",
  "/hello",
  "/",
  "/user/v1/login",
  "/user/v1/articles/all",
  "/user/v1/article",
  // "/interview/v1/outcome",
  // "/interview/v1/verify/",
  // "/interview/v1/review/", // dynamic route /:interviewid
  // "/user/v1/candidate/profile/", // dynamic route /:username
];

export { skipRoutes };
