import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "th"],

  defaultLocale: "th",
});

export const config = {
  matcher: ["/", "/(th|en)/:path*"],
};
