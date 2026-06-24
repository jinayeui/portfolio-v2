import Image from 'next/image';
import { projects } from '@/data/portfolio';
import Section from '@/components/layout/Section';
import SectionLabel from '@/components/ui/SectionLabel';
import Title from '@/components/ui/Title';
import Button from '@/components/ui/Button';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <Section id="projects">
      <SectionLabel text={'✦ Projects'} />
      <div className={styles.headerRow}>
        <Title>
          Work<br />
          Archive
        </Title>
        <Button
          text={'VIEW MORE →'}
          href={'https://foggy-napkin-4b2.notion.site/3716da1da01180f7b323c3198d588343?source=copy_link'}
          ariaLabel={'경력기술서 열기'}
          className={'btnMore'}
        />
      </div>

      <ul
        className={styles.projectList}
        data-aos="fade-up"
        data-aos-delay="200"
      >
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
    </Section>
  );
}
