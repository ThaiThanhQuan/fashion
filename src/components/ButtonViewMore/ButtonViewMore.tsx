interface IProps {
    className?: string;
    title: string;
    onClick?: () => void;
    disabled?: boolean;
}

function ButtonViewMore({ className, title, onClick, disabled }: IProps) {
    return (
        <div className="cursor-pointer">
            <button
                type="button"
                onClick={onClick}
                disabled={disabled}
                className={`border border-outline-variant py-6 px-16 text-xs font-headline font-bold uppercase tracking-[0.3em] transition-all duration-500 mb-10 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer ${className}`}
            >
                {title}
            </button>
        </div>
    );
}

export default ButtonViewMore;
