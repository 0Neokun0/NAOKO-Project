import Image from "next/image";
import HeaderLink from "../components/HeaderLink";
import ExploreIcon from "@mui/icons-material/Explore";
import GroupIcon from "@mui/icons-material/Group";
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Head from "next/head";
import { getProviders, signIn} from "next-auth/react";

function Home({ providers }) {
  return (
    <div className="space-y-10 relative">
      <Head>
        <title>Upcolor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex justify-around items-center py-4">
        <div className="relative w-32 h-10">
          <Image src="https://weblike-upcolor.ssl-lolipop.jp/UpColor/includes/images/Up.png" layout="fill" objectFit="contain" />
        </div>
        <div className="flex items-center sm:divide-x divide-gray-400">
            <div className="hidden sm:flex space-x-8 pr-4">
            <HeaderLink Icon={ExploreIcon} text="検索" feed/>
            <HeaderLink Icon={GroupIcon} text="学生" />
            <HeaderLink Icon={SchoolIcon} text="クラス" />
            <HeaderLink Icon={BusinessCenterIcon} text="企業" />
            </div>
            
            {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <div className="pl-4">
                <button
                  className="text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5 transition-all hover:border-2"
                  onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                >
                  Sign in
                </button>
              </div>
            </div>
          ))}
        </div>
      </header>

      <main className="flex flex-col xl:flex-row items-center max-w-screen-lg mx-auto">
        <div className="space-y-6 xl:space-y-10">
          <h1 className="text-5xl md:text-5xl text-amber-800/80 max-w-xl !leading-snug pl-4 xl:pl-0">
            世こそUPCOLORへ
          </h1>
          <div className="space-y-4">
            <div className="intent">
              <h2 className="text-xl">学生</h2>
              <ArrowForwardIosRoundedIcon className="text-gray-700" />
            </div>
            <div className="intent">
              <h2 className="text-xl">先生</h2>
              <ArrowForwardIosRoundedIcon className="text-gray-700" />
            </div>
            <div className="intent">
              <h2 className="text-xl">企業</h2>
              <ArrowForwardIosRoundedIcon className="text-gray-700" />
            </div>
          </div>
        </div>

        <div className="relative xl:absolute w-80 h-80 xl:w-[850px] xl:h-[850px] top-14 right-5 opacity-50 mt-10">
          <Image src = "https://github.com/0Neokun0/Upcolor/blob/main/project_img/upcolor.png?raw=true" layout="fill" priority />
        </div>
      </main>
    </div>
  );
}

export default Home;

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}