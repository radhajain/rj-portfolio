"use client";
import { LinkedInIcon } from "public/icons";
import PortfolioPage from "~/_components/PortfolioPage";

export default function Experience() {
  return (
    <PortfolioPage>
      <div className="flex w-full flex-col gap-10 ">
        {workExperience.map(({ title, description, dateRange }) => (
          <div
            className="md:gap-15 md:flex-no-wrap flex flex-wrap gap-5"
            key={title}
          >
            <div className="flex w-full flex-col md:min-w-[400px] md:flex-1 md:gap-5">
              <span className="text-2xl">{title}</span>
              <span className="font-semibold text-secondary">{dateRange}</span>
            </div>
            <div className="text-left opacity-80 md:flex-1 md:text-right">
              {description}
            </div>
          </div>
        ))}
        <a
          href="https://www.linkedin.com/in/radha-jain-815047122"
          className="opacity-80"
          rel="none"
          target="_blank"
        >
          <LinkedInIcon className="opacity-70 hover:opacity-100" />
        </a>
      </div>
    </PortfolioPage>
  );
}

type WorkExperience = {
  title: string;
  dateRange: string;
  description: string;
};
// TODO: add real descriptions
const workExperience: readonly WorkExperience[] = [
  {
    title: "Product Engineer at Palantir",
    dateRange: "Feb 2020 - Present",
    description:
      "One of 4 developers of AIP Logic, a no-code IDE for deploying production-ready LLM functions complete with data integration, debugging, observability and evaluation features. Used by over 25,000 people within 6 months, to author over 300,000 functions in production at ~150 customers.",
  },
  {
    title: "Founder at Fit to Form (YC S19)",
    dateRange: "May 2019 - Dec 2019",
    description:
      "Built a fashion search engine and site for curated online shopping, for clothes guaranteed to fit.",
  },
  {
    title: "Mayfield Fellow at Stanford University",
    dateRange: "Sept 2015 - June 2019",
    description: "B.A. in Economics & B.S. in Computer Science",
  },
];
