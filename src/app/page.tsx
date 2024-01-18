import React from "react";

export default function HomePage() {
  return (
    <div className="justify-spaced flex flex-wrap items-start gap-28 font-serif text-white lg:flex-nowrap">
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
            className="text-sage underline"
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
          <div>Some things I like:</div>
          {recommendations.map(({ category, items }) => (
            <div
              key={category}
              className="flex flex-wrap justify-end gap-5 sm:flex-nowrap "
            >
              <div className="flex-1 text-left">{category}</div>
              <div className="text-sage flex flex-1 flex-col gap-2 text-right opacity-80">
                {items.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

type CategoryRecommendations = {
  category: string;
  items: readonly string[];
};

const recommendations: readonly CategoryRecommendations[] = [
  {
    category: "Movies",
    items: [
      "Apolcapyse Now",
      "The Talented Mr Ripley",
      "Gone girl",
      "American psycho",
    ],
  },
  {
    category: "Cities",
    items: [
      "Montpellier, France",
      "Buenos Aires, Argentina",
      "Ho Chi Minh City, Vietnam",
      "Bergen, Norway",
      "Havana, Cuba",
    ],
  },
  {
    category: "Books",
    items: [
      "Destiny Disrupted",
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
      "Cold plunges",
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
    items: ["Urban design", "Architecture", ""],
  },
];
