type Props = {
    type?: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    required?: boolean;
};

export default function TextField({ type = "text", placeholder, value, onChange, required }: Props) {
  return (
    <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full bg-transparent border-0 border-b outline-none border-[#b2b2b14d] py-4 text-[#323233] placeholder-[#c7c9c4] transition-all font-light"
    />
  );
}