import { IProduct } from "@/src/types";

interface IProps {
    product: IProduct;
}

function ProductMeta({ product }: IProps) {
    return (
        <>
            <p className="font-headline text-(--primary-color) tracking-widest text-xs font-bold uppercase">
                Collection Nº 04
            </p>
            <div className="text-6xl tracking-tighter leading-tight font-extrabold uppercase mt-4 max-w-239.25">
                {product.title}
            </div>
            <div className="flex items-end gap-4 mt-4">
                <span className="text-2xl font-light text-on-surface">
                    $ {product.price.toLocaleString("de-DE")}
                </span>
                <span className="text-xs uppercase tracking-widest text-[#5f5f5f] mb-1">
                    {product.label}
                </span>
            </div>
            <p className="mt-10 text-[#5f5f5f] leading-relaxed font-light text-lg">
                {product.description}
            </p>
        </>
    );
}

export default ProductMeta;