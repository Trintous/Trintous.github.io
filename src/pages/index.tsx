import Image from 'next/image'
import { Inter } from 'next/font/google'
import { BlobDiv, BlobG1, BlobG2, BlobSection, NameDiv, NameHeader } from '@/styles'
import Name from '@/components/Name'
import pokemongif from '../../public/images/200w.gif'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
		<main className="flex min-h-screen flex-col items-center p-24">
				<Image
					src={pokemongif}
					alt="Meliodas"
					width={180}
					height={37}
					priority
                    className='pointer-events-none'
				/>
                <h1 className='mx-auto text-5xl font-apple font-semibold text-white mb-10'>
                    hey i'm tony <span className="ec ec-wave wave"></span>
                </h1>
                <div className="opacity-60 text-sky-700 rounded-xl mx-auto p-6 bg-slate-300 font-apple">
                       <h1 className='font-semibold text-4xl'>web developer</h1>
                       <p className='text-lg text-blue-500'><a href='https://react.dev'>react</a></p>
                       <p className='text-lg text-blue-500'><a href='https://nextjs.org/'>next.js</a></p>
                </div>
		</main>
  );
}
