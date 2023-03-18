import styles from "./Home.module.scss";

import Link from "next/link";
import Image from "next/image";

import img1 from "../../images/home-img-1.png";
import img2 from "../../images/home-img-2.png";
import img3 from "../../images/home-img-3.png";
import img4 from "../../images/home-img-4.png";
import img5 from "../../images/home-img-5.png";
import img6 from "../../images/home-img-6.png";
import img7 from "../../images/home-img-7.png";
import img8 from "../../images/home-img-8.png";
import img9 from "../../images/home-img-9.png";

const Projects = () => {
  const _projects = [
    { img: img1, company: "H&M", type: "Mobile Application " },
    { img: img2, company: "ACRE", type: "Brand Identity" },
    { img: img3, company: "Brand Identity", type: "Brand Identiy" },
    { img: img4, company: "MYEL", type: "Web Design" },
    { img: img5, company: "Chungu", type: "Web Design" },
    { img: img6, company: "Cyptic", type: "Mobile Application" },
    { img: img7, company: "Fancheque", type: "Art Direction" },
    { img: img8, company: "NEARA", type: "Brand Identity" },
    { img: img9, company: "Pangram", type: "Website" },
  ];
  return (
    <section className={styles.projects}>
      <div className={styles.projects_list}>
        {_projects.map((project, index) => (
          <Link href="">
            <article className={styles.projects_project}>
              <Image
                src={project.img}
                alt=""
                title=""
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
              {/* <div className={styles.projects_project_item_info}>
                <h4>{project.company}</h4>
                <p>{project.type}</p>
              </div> */}
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
