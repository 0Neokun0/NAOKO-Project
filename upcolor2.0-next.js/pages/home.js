import Image from "next/image";
import HeaderLink from "../components/HeaderLink";
import ExploreIcon from "@mui/icons-material/Explore";
import GroupIcon from "@mui/icons-material/Group";
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

function Home() {
  return (
    <div>
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
            <div className="pl-4">
            <button
                  className="text-green-700 font-semibold rounded-full border border-green-700 px-5 py-1.5 transition-all hover:border-2"
                  onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                >
                  Sign in
            </button>
            </div>
        </div>
      </header>

      <main className="flex flex-col xl:flex-row items-center max-w-screen-lg mx-auto">
        <div className="space-y-6 xl:space-y-10">
          <h1 className="text-3xl md:text-5xl text-amber-800/80 max-w">世こそわが世界へ</h1>
        </div>

      </main>
    </div>
  );
}

export default Home;