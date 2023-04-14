import Image from 'next/image'
import { Inter } from 'next/font/google'
import { BlobDiv, BlobG1, BlobG2, BlobSection, Name, NameDiv, NameHeader } from '@/util/styles'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">


				<Image
					src="/meliodaschibi.png"
					alt="Meliodas"
					width={180}
					height={37}
					priority
				/>
        <NameHeader>
          <h1>console<span className="text-white">.<span style={{ color:'rgb(75 136 237)' }}>log</span></span>("</h1>
          <NameDiv>
            <Name>Hey, My name is Tony!</Name>
          </NameDiv>
          <h1 className="closure">");</h1>
        </NameHeader>
			


			<div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
				<a
					href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2
						className={`${inter.className} mb-3 text-2xl font-semibold`}
					>
						Docs{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p
						className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
					>
						Find in-depth information about Next.js features and
						API.
					</p>
				</a>

				<a
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2
						className={`${inter.className} mb-3 text-2xl font-semibold`}
					>
						Learn{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p
						className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
					>
						Learn about Next.js in an interactive course
						with&nbsp;quizzes!
					</p>
				</a>

				<a
					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2
						className={`${inter.className} mb-3 text-2xl font-semibold`}
					>
						Templates{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p
						className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
					>
						Discover and deploy boilerplate example
						Next.js&nbsp;projects.
					</p>
				</a>

				<a
					href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2
						className={`${inter.className} mb-3 text-2xl font-semibold`}
					>
						Deploy{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p
						className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
					>
						Instantly deploy your Next.js site to a shareable URL
						with Vercel.
					</p>
				</a>
			</div>
		</main>
  );
}
