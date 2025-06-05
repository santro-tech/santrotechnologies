import Head from 'next/head';
import Slide from '@/components/Slide';
import Ourservices from '@/components/Ourservices';
import ChooseUs from '@/components/Chooseus';
import Workprocess from '@/components/Workprocess';
import Sectorwesupport from '@/components/Sectorwesupport';

export default function Home() {
  return (
    <>
      <Head>
        <title>Santrotech Software Technologies | Leading Software Development Company</title>
        <meta
          name="description"
          content="Santrotech is a leading software development company offering web, mobile, and cloud solutions with innovation and expertise."
        />
        <link rel="canonical" href="https://santro-tech.com" />
        <meta property="og:title" content="Santrotech Software Technologies" />
        <meta
          property="og:description"
          content="Custom web and mobile software development for startups and enterprises. Transform your ideas with Santrotech."
        />
        <meta property="og:image" content="/assets/LOGO.jpg" />
        <meta property="og:url" content="https://santro-tech.com" />
        <meta name="twitter:title" content="Santrotech Software Technologies" />
        <meta
          name="twitter:description"
          content="Innovative software development company – Santrotech."
        />
      </Head>

      {/* ✅ Only the content here, layout handles header/footer */}
      <Slide />
      <Ourservices />
      <ChooseUs />
      <Sectorwesupport />
      <Workprocess />
    </>
  );
}
