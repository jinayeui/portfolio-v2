export default function SectionLabel({ text }: { text: string }) {
  return (
    <div className='sectionLabel'>
      <p className='labelText' data-aos='fade-left'>
        {text}
      </p>
      <div className='labelLine' />
    </div>
  );
}
