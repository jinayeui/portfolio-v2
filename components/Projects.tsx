import Image from 'next/image';
import { projects } from '@/data/portfolio';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionLabel}>
          <p className={styles.labelText} data-aos="fade-left">02. Projects</p>
          <div className={styles.labelLine} />
        </div>

        <div className={styles.headerRow}>
          <h2 className={styles.title} data-aos="fade-up"data-aos-delay="200">
            Work<br />
            Archive
          </h2>

          <div className={styles.btnProjects}>
            <a
              href="https://foggy-napkin-4b2.notion.site/3716da1da01180f7b323c3198d588343?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="경력기술서 열기"
            >
              VIEW MORE →
            </a>
          </div>
        </div>

        <ul className={styles.projectList} data-aos="fade-up" data-aos-delay="200">
          {projects.map((project) => {
            const isExternal = !!project.url; // url이 있으면 true, 없으면 false
            return (
              <li key={project.id}>
                <a
                  href={project.url || '#'}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                >
                  <div className={styles.thumb}>
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className={styles.thumbImg}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className={styles.desc}>
                    <p className={styles.subTit}>{project.subtitle}</p>
                    <h3 className={styles.tit}>{project.title}</h3>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
