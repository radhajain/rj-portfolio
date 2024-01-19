export default function Experience() {
  return (
    <div className="flex w-full flex-col gap-10 ">
      {workExperience.map(({ title, description, dateRange }) => (
        <div
          className="md:gap-15 md:flex-no-wrap flex flex-wrap gap-5"
          key={title}
        >
          <div className="flex w-full flex-col md:min-w-[400px] md:flex-1 md:gap-5">
            <span className="text-2xl">{title}</span>
            <span className="text-secondary font-semibold">{dateRange}</span>
          </div>
          <div className="text-right md:flex-1">{description}</div>
        </div>
      ))}
    </div>
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
