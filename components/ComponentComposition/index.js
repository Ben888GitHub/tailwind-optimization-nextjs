import { Product } from './Product';

const ProductComposition = () => {
	return (
		<Product>
			<Product.Image src="/watch.png" />
			<Product.Content>
				<div className="flex justify-between">
					<Product.Title>Nice Watch</Product.Title>
					<Product.Price>129.99</Product.Price>
				</div>
				<Product.Description>
					Best watch you can get for your money
				</Product.Description>
				<Product.Subheading>Size</Product.Subheading>
				<Product.Sizes>
					<Product.Size>XS</Product.Size>
					<Product.Size>S</Product.Size>
					<Product.Size selectedSize>M</Product.Size>
					<Product.Size>L</Product.Size>
					<Product.Size>XL</Product.Size>
				</Product.Sizes>
				<div className="lg:flex md:flex  gap-4">
					<Product.Button onClick={() => console.log('Bought')}>
						BUY NOW
					</Product.Button>
					<Product.Button onClick={() => console.log('Added to Cart')}>
						ADD TO CART
					</Product.Button>
				</div>
			</Product.Content>
		</Product>
	);
};

export default ProductComposition;
