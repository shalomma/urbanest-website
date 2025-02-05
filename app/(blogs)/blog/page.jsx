import Header3 from "@/components/headers/Header3";

import Footer2 from "@/components/footers/Footer2";
import Newsletter from "@/components/blog/Newsletter";
import Blogs1 from "@/components/blog/Blogs1";
import RtlConverter from "@/components/common/RtlConverter";
import React from "react";
import Cta from "@/components/innerpages/Cta";
export const metadata = {
  title:
    "Blog 1 || Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function BlogPage1() {
  return (
    <>
      <RtlConverter />
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header3 />
        <div id="wrapper" className="wrap">
          <Blogs1 />
          <Cta />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
