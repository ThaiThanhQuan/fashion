interface IProps {
  className: string;
  title: string;
}

function ButtonViewMore({ className, title }: IProps) {
  return (
    <div className="cursor-pointer">
      <button
        className={`border border-outline-variant py-6 px-16 text-xs font-headline font-bold uppercase tracking-[0.3em] transition-all duration-500 mb-10 ${className}`}
      >
        {title}
      </button>
    </div>
  );
}

export default ButtonViewMore;
