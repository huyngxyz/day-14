import {MdSubdirectoryArrowRight} from 'react-icons/md'

export default function Projects({ title, index, tag, setModal }) {
  return (
    <a href='' className="py-5 border-b-2 border-black flex items-center justify-between px-2 group" onMouseEnter={() => {setModal({active: true, index: index})}} onMouseLeave={() => {setModal({active: false, index: index})}}>
      <div className="space-y-2">
        <span className="tracking-wide text-sm mb-1 inline-block text-slate-500 rounded-full px-3  bg-transparent border-2 border-slate-500 font-bold">
          {tag}
        </span>
        <h2 className="text-4xl text-neutral-950 tracking-tight">
          {title}
        </h2>
      </div>
      <div className='bg-slate-200 p-3 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all ease-in-out flex items-center justify-center rounded-full'>
        <MdSubdirectoryArrowRight size={38}/>
      </div>
    </a>
  );
}
