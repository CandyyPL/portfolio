export default function Navigation() {
  return (
    <nav className='flex flex-col items-center justify-center gap-8 text-3xl'>
      <a href='#welcome'>
        <div>witaj</div>
      </a>
      <a href='#projects'>
        <div>projekty</div>
      </a>
      <a href='#about'>
        <div>o mnie</div>
      </a>
      <a href='#contect'>
        <div className='bg-yellow text-dark px-10 py-4'>kontakt</div>
      </a>
    </nav>
  );
}
