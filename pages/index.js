import BasicAnimation from '@/components/BasicAnimation';
import ClassVariables from '@/components/ClassVariables';
import ProductComposition from '@/components/ComponentComposition';
import DynamicUtilities from '@/components/DynamicUtilities';
import GroupHover from '@/components/GroupHover';
import MergeClassConflict from '@/components/MergeClassConflict';
import ResponsiveGrid from '@/components/ResponsiveGrid';
import ReusableComponent from '@/components/ReusableComponent';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main
			className={`flex flex-col items-center justify-between p-24 ${inter.className}`}
		>
			<p className="text-3xl bg-gray-300 mb-20">Tailwind optimization </p>
			<GroupHover />
			<br />
			<BasicAnimation />
			<br />
			<ResponsiveGrid />
			<br />
			<ClassVariables />
			<br />
			<DynamicUtilities />
			<br />
			<MergeClassConflict />
			<br />
			<ReusableComponent />
			<br />
			<ProductComposition />
		</main>
	);
}
