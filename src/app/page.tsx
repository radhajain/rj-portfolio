"use client";
import React from "react";
import InfiniteScrollList from "~/_components/InfiniteScrollList";
import PortfolioPage from "../_components/PortfolioPage";

export default function HomePage() {
  return (
    <PortfolioPage>
      <div className="justify-spaced flex flex-wrap items-start gap-28 lg:flex-nowrap">
        <div className=" flex min-w-full flex-1 flex-col gap-5 text-xl leading-8 sm:min-w-[400px]">
          <div>
            I&apos;m a developer based in New York building 0 to 1 products.
            Nine years ago I came to the US from London and, despite
            USCIS&apos;s best efforts, never left.
          </div>
          <div>
            I currently work on a small team building Palantir&apos;s flagship
            AI application,{" "}
            <a
              href="https://www.palantir.com/platforms/aip/"
              className="underline hover:text-secondary"
              rel="none"
              target="_blank"
            >
              AIP Logic.
            </a>
          </div>
          <div>
            Previously, I founded a fashion-tech startup and took it through
            YCombinator, and studied Computer Science & Economics at Stanford.
          </div>
          <div>
            Contact:{" "}
            <a
              href="mailto:hi@radhajain.com"
              className="underline-offset-5 underline hover:text-secondary"
            >
              hi@radhajain.com
            </a>
          </div>
        </div>
        <div className="flex flex-1 justify-start md:justify-end">
          <div className="flex w-full flex-col gap-5 md:w-[350px]">
            <div className="font-semibold">Some things I like</div>
            <InfiniteScrollList
              items={recommendations}
              renderItem={renderRecommendation}
            />
          </div>
        </div>
      </div>
    </PortfolioPage>
  );
}

type CategoryRecommendations = {
  category: string;
  items: readonly string[];
};

function renderRecommendation({ category, items }: CategoryRecommendations) {
  return (
    <div
      key={category}
      className="align-center flex flex-col flex-wrap justify-end gap-5 xs:h-[152px] xs:flex-row sm:flex-nowrap"
    >
      <div className="flex-1 text-left font-semibold text-secondary">
        {category}
      </div>
      <div className="text-sage flex-2 flex flex-col gap-2 opacity-80 xs:text-right">
        {items.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </div>
  );
}

const recommendations: readonly CategoryRecommendations[] = [
  // Essays?, with links
  {
    category: "Books",
    items: [
      "Beginning of Infinity",
      "The Silk Roads",
      "Sovietistan",
      "The Dawn of Everything",
      "Until the End of Time",
    ],
  },
  {
    category: "Activities",
    items: [
      "Road biking",
      "Kickboxing",
      "Woodworking",
      "Scuba diving",
      "Hot yoga",
    ],
  },
  {
    category: "Interests",
    items: [
      "Urban design",
      "Architecture",
      "Behavioral economics",
      "Foreign affairs",
      "Healthcare",
    ],
  },
];
