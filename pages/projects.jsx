import ProjectsImage from "../components/projects/ProjectsImage";
import OurProgramming from "../components/projects/OurProgramming";
import OurDesign from "../components/projects/OurDesign";
import Head from "next/head";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="icon.svg " />
      </Head>
      <ProjectsImage />
      <OurProgramming />
      <OurDesign />
    </>
  );
}
