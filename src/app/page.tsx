"use client";
import React from "react";
import InfiniteScrollList from "~/_components/InfiniteScrollList";

export default function HomePage() {
  return (
    <div className="justify-spaced flex flex-wrap items-start gap-28 lg:flex-nowrap">
      <div className=" flex min-w-full flex-1 flex-col gap-5 text-xl leading-8 sm:min-w-[400px]">
        <div>
          I&apos;m Radha, a front-end developer based in New York building 0 to
          1 products. Eight years ago I came to the US from London and, despite
          USCIS&apos;s best efforts, never left.
        </div>
        <div>
          I currently work on a small team building{" "}
          <a
            href="https://www.palantir.com/docs/foundry/logic/overview/"
            className="hover:text-secondary font-semibold"
            rel="none"
            target="_blank"
          >
            Palantir&apos;s flagship AI application, AIP Logic.
          </a>{" "}
          Previously, I founded a fashion-tech startup and took it through
          YCombinator, and studied Computer Science & Economics at Stanford.
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
      className="align-center flex flex-wrap justify-end gap-5 sm:flex-nowrap"
    >
      <div className="text-secondary flex-1 text-left font-semibold">
        {category}
      </div>
      <div className="text-sage flex-2 flex flex-col gap-2 text-right opacity-80">
        {items.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </div>
  );
}

const recommendations: readonly CategoryRecommendations[] = [
  {
    category: "Movies",
    items: [
      "Apolcapyse Now",
      "The Talented Mr Ripley",
      "Gone girl",
      "American psycho",
      "City of God",
    ],
  },
  {
    category: "Cities",
    items: [
      "Montpellier, FR",
      "Buenos Aires, AR",
      "Ho Chi Minh City, VN",
      "Bergen, NO",
      "Havana, CU",
    ],
  },
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
      "Triathalons",
      "Kickboxing",
      "Woodworking",
      "Scuba diving",
      "Hot yoga",
    ],
  },
  {
    category: "Museums",
    items: [
      "Wallace Collection",
      "Designmuseum Danmark",
      "Vietnam Museum of Ethnology",
      "Museum of the City of New York",
      "Real Alcazar de Sevilla",
    ],
  },
  {
    category: "Interests",
    items: [
      "Urban design",
      "Architecture",
      "Behavioral economics",
      "Foreign affairs",
      "Interior design",
    ],
  },
];
