import Link from "next/link";
import Navbar from "~/_components/navbar";

export default function HomePage() {
  return (
    <main className="bg-custom-brown flex h-screen justify-center">
      <div className="container flex w-full flex-col items-center">
        <Navbar />
        <div className="mt-20 flex flex-col items-center justify-center gap-12 p-5 font-serif text-white md:max-w-3xl">
          <div className="text-5xl font-thin tracking-wide">
            My name is Radha Jain. I&apos;m an <i>front-end developer</i> based
            in New York building 0 to 1 products.
          </div>
          <div className="text-xl italic">
            I&apos;m currently working on a small team building Palantir&apos;s
            flagship AI application,{" "}
            <a
              href="https://www.palantir.com/docs/foundry/logic/overview/"
              className="text-slate-200 underline"
              rel="none"
              target="_blank"
            >
              AIP Logic.
            </a>
          </div>
          {workExperience.map(({ title, description, dateRange }) => (
            <div className="gap-15 container flex" key={title}>
              <div className="flex flex-1 flex-col gap-5">
                <span className="text-2xl">{title}</span>
                <i>{dateRange}</i>
              </div>
              <div className="flex-1">{description}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
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
    description: "Building AI applications",
  },
  {
    title: "Founder at Fit to Form (YC S19)",
    dateRange: "May 2019 - Dec 2019",
    description: "Shop for clothes that fit you perfectly",
  },
  {
    title: "Mayfield Fellow at Stanford University",
    dateRange: "Sept 2015 - June 2019",
    description: "B.A. in Economics & B.S. in Computer Science",
  },
];
