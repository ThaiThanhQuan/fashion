type Props = {
  placeholder: string;
};

export default function TextAreaField({ placeholder }: Props) {
  return (
    <textarea
      rows={4}
      placeholder={placeholder}
      className="w-full bg-transparent border-0 border-b border-[#b2b2b14d] py-4 text-[#323233] outline-none placeholder-[#c7c9c4] transition-all font-light resize-none"
    />
  );
}