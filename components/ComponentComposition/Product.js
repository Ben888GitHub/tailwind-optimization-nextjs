// * Reusable Composed Components

export const Product = ({ children }) => {
	return (
		<div className="max-w-[538px] w-full rounded-lg bg-white shadow-lg">
			{children}
		</div>
	);
};

const ProductImage = ({ ...props }) => (
	<div className="h-[239px] overflow-hidden">
		<img {...props} />
	</div>
);

const ProductSize = ({ children, selectedSize }) => (
	<button
		className={`w-8 h-8 text-xl font-bold rounded-full ${
			selectedSize && 'bg-black text-white'
		}`}
	>
		{children}
	</button>
);

const ProductSizes = ({ children }) => (
	<div className="flex gap-3.5">{children}</div>
);

const ProductDescription = ({ children }) => (
	<p className="text-xl">{children}</p>
);

const ProductButton = ({ children, ...props }) => (
	<button
		{...props}
		className="lg:mb-0 md:mb-0 mb-3 text-xl font-bold bg-black text-white w-full grow rounded-lg py-2"
	>
		{children}
	</button>
);

const ProductSubheading = ({ children }) => (
	<p className="text-2xl font-bold">{children}</p>
);

const ProductPrice = ({ children }) => (
	<p className="text-xl font-bold ">${children}</p>
);

const ProductTitle = ({ children }) => (
	<h1 className="text-4xl font-bold">{children}</h1>
);

const ProductContent = ({ children }) => (
	<div className="border-t border-black flex flex-col gap-4 p-8">
		{children}
	</div>
);

Product.Content = ProductContent;
Product.Title = ProductTitle;
Product.Price = ProductPrice;
Product.Subheading = ProductSubheading;
Product.Button = ProductButton;
Product.Description = ProductDescription;
Product.Sizes = ProductSizes;
Product.Size = ProductSize;
Product.Image = ProductImage;
