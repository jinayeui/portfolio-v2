import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { projects } from '@/data/portfolio';
import styles from './page.module.css';

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  return {
    title: project ? `${project.title} | JINA's Portfolio` : `PROJECT | JINA's Portfolio`,
  };
}

export default async function ProjectDetail({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) notFound();

  return (
    <>
      <Header />
      <main className={styles.main}>
        <nav className={styles.projectNav}>
          <Link href='/#projects' className={styles.backLink}>
            ← 목록으로
          </Link>
        </nav>

        <article className={styles.content}>
          <div className={styles.projectHeader}>
            <div className={styles.meta}>
              <span className={styles.period}>{project.period}</span>
            </div>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.subtitle}>{project.subtitle}</p>
          </div>

          <div className={styles.tags}>
            {project.techStack?.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>

          <hr className={styles.divider} />

          <p className={styles.description}>{project.description}</p>

          {/* {(project.url || project.github) && (
            <div className={styles.links}>
              {project.github && (
                <a
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.linkBtn}
                >
                  GitHub ↗
                </a>
              )}
              {project.url && (
                <a
                  href={project.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.linkBtn}
                >
                  사이트 바로가기 ↗
                </a>
              )}
            </div>
          )} */}
        </article>
      </main>
      <Footer />
    </>
  );
}
