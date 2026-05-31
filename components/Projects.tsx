'use client';

import Image from 'next/image';
import { projects } from '@/data/portfolio';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id='projects' className={`${styles.section} reveal`}>
      <div className={styles.sectionLabel}>
        <span className={styles.labelText}>02. Projects</span>
        <div className={styles.labelLine} />
      </div>

      <div className={styles.headerRow}>
        <h2 className={styles.title}>
          Work<br />
          Archive
        </h2>

        <div className={styles.btnProjects}>
          <a
            href='https://foggy-napkin-4b2.notion.site/3716da1da01180f7b323c3198d588343?source=copy_link'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='경력기술서 열기'
          >
            VIEW MORE →
          </a>
        </div>
      </div>

      <ul className={styles.projectList}>
        {projects.map((project) => {
          const isExternal = !!project.url;
          return (
            <li key={project.id}>
              <a
                href={project.url || '#'}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
              >
                <div className={styles.thumb}>
                  {project.thumbnail ? (
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className={styles.thumbImg}
                      sizes='(max-width: 768px) 100vw, 33vw'
                    />
                  ) : (
                    <span className={styles.index}>{project.id}</span>
                  )}
                </div>

                <div className={styles.desc}>
                  <p className={styles.subtit}>{project.subtitle}</p>
                  <h3 className={styles.tit}>{project.title}</h3>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
