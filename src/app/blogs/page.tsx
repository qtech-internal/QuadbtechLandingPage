import SectionOne from "@/app/components/blogs/sectionOne";
import SectionTwo from "@/app/components/blogs/sectionTwo";
import SectionThree from "@/app/components/blogs/sectionThree";

export const metadata = {
  title: "Blogs",
};



export default function Home() {
  return (
      <div>
        <main>
          {/* Section one  */}
          <SectionOne />

          {/* Section two  */}
          <SectionTwo />

          {/* section 3 */}
          <SectionThree />
        </main>
      </div>
  );
}
