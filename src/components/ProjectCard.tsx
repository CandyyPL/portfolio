export default function ProjectCard() {
  return (
    <li>
      <article className='bg-background-light flex h-112 w-82 flex-col rounded-md'>
        <img
          src='https://placehold.co/1280x720'
          alt='thumbnail'
          className='block rounded-t-md'
        />
        <div className='flex h-full flex-col items-center justify-between gap-2 p-4'>
          <h1 className='text-light w-full text-2xl font-medium'>
            Example name
          </h1>
          <p className='text-light-dim line-clamp-4 text-lg'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            corporis doloremque explicabo fuga illo natus officiis provident
            velit?
          </p>
          <button className='bg-yellow hover:bg-yellow-dim transition-bg text-dark w-full cursor-pointer px-6 py-2 text-lg duration-200'>
            Czytaj więcej
          </button>
        </div>
      </article>
    </li>
  );
}
