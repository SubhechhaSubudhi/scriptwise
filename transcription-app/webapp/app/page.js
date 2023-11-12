import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
            <Head>
                <title>Transcription App</title>
                <meta name="description" content="Automated transcription and caption service" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
                <h1 className="text-6xl font-bold">
                    Welcome to <span className="text-blue-500">Transcription App</span>
                </h1>

                <p className="mt-3 text-2xl">
                    Your easy-to-use transcription service
                </p>

                <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                    <Link legacyBehavior href="/upload">
                        <a className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-500 focus:text-blue-500">
                            <h3 className="text-2xl font-bold">Upload File &rarr;</h3>
                            <p className="mt-4 text-xl">
                                Start by uploading your audio or video files.
                            </p>
                        </a>
                    </Link>

                    <Link legacyBehavior href="/transcripts">
                        <a className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-500 focus:text-blue-500">
                            <h3 className="text-2xl font-bold">View Transcripts &rarr;</h3>
                            <p className="mt-4 text-xl">
                                Access and edit your transcriptions here.
                            </p>
                        </a>
                    </Link>
                </div>
            </main>

            <footer className="flex items-center justify-center w-full h-24 border-t border-gray-700">
                <p>
                    Transcription App &copy; {new Date().getFullYear()}
                </p>
            </footer>
        </div>
    );
}