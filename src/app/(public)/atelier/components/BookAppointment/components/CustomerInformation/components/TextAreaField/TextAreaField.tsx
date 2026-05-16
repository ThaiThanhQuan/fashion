type Props = {
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
};

export default function TextAreaField({ placeholder, value, onChange }: Props) {
    return (
        <textarea
            rows={4}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full bg-transparent border-0 border-b border-[#b2b2b14d] py-4 text-[#323233] outline-none placeholder-[#c7c9c4] transition-all font-light resize-none"
        />
    );
}