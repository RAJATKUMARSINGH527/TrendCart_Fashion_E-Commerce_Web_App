import React, { useState, useEffect, useRef } from "react";
import "./Home.css";

const Home = () => {
  const [currentBannerSlide, setCurrentBannerSlide] = useState(0);
  const [currentRisingStarsSlide, setCurrentRisingStarsSlide] = useState(0);
  const [currentLuxeSlide, setCurrentLuxeSlide] = useState(0);
  const [currentMedalSlide, setCurrentMedalSlide] = useState(0);
  const [currentGlobalSlide, setCurrentGlobalSlide] = useState(0);

  // Animation state for sections
  const [isFading, setIsFading] = useState({
    risingStars: false,
    luxe: false,
    medal: false,
    global: false,
  });

  const carouselTimeoutRefs = useRef({
    risingStars: null,
    luxe: null,
    medal: null,
    global: null,
  });

  // Define slider data with their content lengths
  const sliderData = {
    banner: {
      count: 5,
      setter: setCurrentBannerSlide,
      current: currentBannerSlide,
    },
    risingStars: {
      count: 3, // 3 slides (each with 5 products)
      setter: setCurrentRisingStarsSlide,
      current: currentRisingStarsSlide,
    },
    luxe: {
      count: 3, // 3 slides (each with 6 products)
      setter: setCurrentLuxeSlide,
      current: currentLuxeSlide,
    },
    medal: {
      count: 4, // 4 slides (each with 6 products)
      setter: setCurrentMedalSlide,
      current: currentMedalSlide,
    },
    global: {
      count: 2, // 2 slides (each with 6 products)
      setter: setCurrentGlobalSlide,
      current: currentGlobalSlide,
    },
  };

  // Banner images
  const bannerImages = [
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/11/Nxt2FYON_89070baeafca4a8fb89a298e00897f7f.jpg",
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg",
    "http://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg",
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg",
    "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/27/53b4daed-cd2c-4111-86c5-14f737eceb351656325318973-Handbags_Desk.jpg",
  ];

  // Rising Stars product data - organized into groups of 5
  const risingStarsProducts = [
    // First slide (5 products)
    [
      {
        src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/4/3/925ace95-64e1-4692-92c0-826bde3f838b1743664826626-image_png2008444094.png",
        alt: "Highlander Ketch fashion",
      },
      {
        src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/4/3/08fed317-13c3-4fca-925f-4e3f904adf6e1743664846782-image_png_345798654.png",
        alt: "Tokyo Talkies Sassafras fashion",
      },
      {
        src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/4/3/edb347da-f35b-4d68-91d7-e3b0abba39f01743664908755-cf0de057-98b8-4d14-968d-8b35878100db.png",
        alt: "Beryglam Street9 fashion",
      },
      {
        src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/4/3/9ca117d1-1c90-4217-8615-f5d9a66245251743664924386-image_png676529993.png",
        alt: "Dennison fashion",
      },
      {
        src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/4/3/62628ecd-af1d-4b81-8a82-302520ade5061743664952778-image_png_1238714099.png",
        alt: "Ethnic fashion",
      },
    ],
    // Second slide (5 products)
    [
      {
        src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/4/3/62d92229-2d9d-4cc6-933f-1facd190248c1743664969307-image_png_1434304747.png",
        alt: "Ethnic fashion",
      },
      {
        src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/4/3/b3b8e1d5-0b7f-4ac2-988a-e1a2a4b71ef51743664985845-image_png747386139.png",
        alt: "Ethnic fashion",
      },
      {
        src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/4/3/6d3a4cec-35ee-4002-b8c9-115b7979eb4e1743665003385-image_png225290513.png",
        alt: "Ethnic fashion",
      },
      {
        src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/4/3/a478f3f4-b261-4d42-8b41-ba8e38eed7491743665021245-3d887b9c-1741-4f13-928f-4e052f5b4858.png",
        alt: "Ethnic fashion",
      },
      {
        src: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/4/3/e227f4c1-b6c6-4abc-bfcf-4693266d102a1743665039878-image_png_1046077641.png",
        alt: "Ethnic fashion",
      },
    ],
    // Third slide (5 products)
    [
      {
        src: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/4/3/b17e2c3a-6827-4232-b2c7-1c7a3ed0b9ba1743665081294-image_png2131570976.png",
        alt: "Ethnic fashion",
      },
      {
        src: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/4/3/bb80e70c-df47-45e1-a5fa-770846769a7d1743665099089-image_png_852971279.png",
        alt: "Ethnic fashion",
      },
      {
        src: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/4/3/f1c6e58a-b514-4081-9c10-096dde097ac91743665116601-image_png_1886899461.png",
        alt: "Ethnic fashion",
      },
      {
        src: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/4/3/bc244f6b-ec59-4e0a-affb-84a062bdb5e11743665134126-image_png69923319.png",
        alt: "Ethnic fashion",
      },
      {
        src: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/4/3/3b8762c2-8c67-46ff-8a4e-f8d0bf6c38121743665152429-image_png282063139.png",
        alt: "Ethnic fashion",
      },
    ],
  ];

  // Luxe products data - organized into groups of 6
  const luxeProducts = [
    // First slide (6 products)
    [
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/vEWFYOye_14f4f7547ecb4c079855f8301128df46.png",
        alt: "Forest Essentials",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/yeoUJy1S_4e79c54bdd174052a9abcfac1d2a8bbd.png",
        alt: "Kama Ayurveda",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/wFPkZ6H1_c9bb52d0824d4edcb2dbec7fe2f800d0.png",
        alt: "Designer Sunglasses",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/RYMYFMOO_ab6eb526601841019b9acd933df1bed6.png",
        alt: "Chopard",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/8nY49yv6_2ac65b37e50645728658d8d7a75a5fd1.png",
        alt: "Swarovski",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/aRBN2tk4_964c12c29366441ab74f35f4efdf9591.png",
        alt: "Kay Ali",
      },
    ],
    // Second slide (6 products)
    [
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/tRX72V2a_47fba08feddc4ad8b9ad5c8dc04c45b3.png",
        alt: "Burberry",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/OJvOUlQW_415a6f82c0ff4c38a3b650c734d3b52e.png",
        alt: "Michael Kors",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/yrJ9o15l_06f85e217b104701aec6ce93c28e46fa.png",
        alt: "Armani",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/rTLGu6Uh_a7a63c3327d343a79a56f3a58eee52e3.png",
        alt: "Versace",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/of67fd3n_dcd2889a4a414ff9ab60ab881934b6ad.png",
        alt: "Dior",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/b1M22Uns_fddc69ba45484eeda68f58756b71037e.png",
        alt: "Prada",
      },
    ],
    // third slide (6 products)
    [
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/oCWlb7u4_17a5608b5a6d410da830b519b57da3b6.png",
        alt: "Burberry",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/r8nIwSKg_d9437733c64b42a49122dbcd98885706.png",
        alt: "Michael Kors",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/qOsCixJM_9e023a3fbfcc48f78367ba593e64b8cb.png",
        alt: "Armani",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/12VHHmXG_5dc5e78601174f9087339eaa7723cc43.png",
        alt: "Versace",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/MSX3QTMF_73993eeee48c472fa4f5c69b3696a0ca.png",
        alt: "Dior",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/G8tg5Sl2_70a3ffda53da4adbbfbe6cad2b0a418b.png",
        alt: "Prada",
      },
    ],
  ];

  // Medal products data - organized into groups of 6
  const medalProducts = [
    // First slide (6 products)
    [
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2023/8/4/71a69cc9-210a-4a95-b37f-78319c8f33761691141606256-image_png2064277310.png",
        alt: "US Polo Assn",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/ccebd3fc-3628-4eb5-9604-5487049c2cff1691142886405-image_png356438875.png",
        alt: "Aldo",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/5a8540d5-9bd0-4a5b-81ee-063f8f23cf1c1691142814463-image_png1048777875.png",
        alt: "Nike",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/30ce6d77-d4f5-4bed-b89a-c9cf00d197b81691142723203-image_png2141362199.png",
        alt: "Adidas",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/26abfeae-7980-4263-aac2-2e6206035da81691142704308-image_png_391142713.png",
        alt: "Puma",
      },
      {
        src: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/6366f7f4-3942-4cbc-af0d-3b63c0f9add71691142685532-image_png45885503.png",
        alt: "Reebok",
      },
    ],
    // Second slide (6 products)
    [
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/ca44e488-c06b-48ce-814f-3a1e3e66e08b1691142548139-image_png_840304476.png",
        alt: "New Balance",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/7abcde7c-18e5-44c5-9cd9-c1490daa842a1691142533559-image_png2078004791.png",
        alt: "Under Armour",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/6ddcd2e5-20c6-4672-9b02-7d2117550f641691142512854-image_png242033865.png",
        alt: "Asics",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/b504644b-f446-48c9-b928-36f1958bd19a1691142484406-image_png_292913761.png",
        alt: "Skechers",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2023/8/4/921e38ac-f903-4701-a419-df42b9448ef51691142513445-image_png1803300271.png",
        alt: "Fila",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/944486f4-8cf8-456e-a0d5-c2655bf1deaa1691131597834-image_png_1935947130.png",
        alt: "Converse",
      },
    ],
    // Third slide (6 products)
    [
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/29/00e27983-d373-4d86-9f25-3e46a18ec12a1690609817622-Top_casual_Styles-_Levi-s-_Tommy_Min_40.png",
        alt: "New Balance",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2023/8/4/dc79e7c8-af20-4b65-ae2f-da2ca8e8c3f31691134139774-image_png1749927309.png",
        alt: "Under Armour",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2023/8/3/a06120fd-caa3-4dac-93c3-3d4d574f8d7c1691087170219-image_png_116457033.png",
        alt: "Asics",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/2ccbd34a-3340-4b55-bd4e-2ac182e425c11691079149976-image_png_1139490265.png",
        alt: "Skechers",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/eb385972-caf6-4e84-a37c-3fc2b4ac52041691079093062-image_png892897249.png",
        alt: "Fila",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/3a834277-7c69-4e28-b50d-79a1a50fb4e81691079063461-image_png_762128704--1-.png",
        alt: "Converse",
      },
    ],
    // Fourth slide (6 products)
    [
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/51084b8a-9c9e-4b03-bc4a-dfd7738590eb1691076143197-image_png949061620--1-.png",
        alt: "New Balance",
      },
      {
        src: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/a9734bdc-8054-4806-8ab4-748d7dfdfe411691066316796-unnamed---2023-08-03T180830.165.png",
        alt: "Under Armour",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/bf39dcbb-1a94-481c-b943-43fca34bf0581691066296958-unnamed---2023-08-03T180811.304.png",
        alt: "Asics",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/8027069a-3a10-4a92-a228-1c4e24cd58071691066276841-unnamed---2023-08-03T180720.906.png",
        alt: "Skechers",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/d6529cc8-ff03-4d85-88b7-5358a1d5a46b1691057399814-image_png1830835492.png",
        alt: "Fila",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/4cde4706-089f-4049-9d9c-116d8631af381691056679844-image_png1175979315.png",
        alt: "Converse",
      },
    ],
  ];

  // Global products data - organized into groups of 6
  const globalProducts = [
    // First slide (6 products)
    [
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/6b6c7162-0086-4967-90c8-ec4792ec200c1690773011082-Dorothy_Perkin-_Boohoo.png",
        alt: "The Collective",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/2/9699db4e-8162-406a-85ba-e92116f0019f1690955825591-image_png2047004151.png",
        alt: "Nautica",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/92d5e2ec-a736-4bfd-832b-6972121829c91690773010945-Aldo.png",
        alt: "Tommy Hilfiger",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/331d0d67-95de-4e58-b774-add891464af01690773011037-Calvin_Klein.png",
        alt: "Calvin Klein",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/d400d2ce-5755-4c86-96b8-26899aea6ea61690773011130-GANT.png",
        alt: "Lacoste",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/d521c019-8fcd-4f36-a56f-7a1b9095e2661690773010958-Antony_Morato.png",
        alt: "Armani Exchange",
      },
    ],
    // Second slide (6 products)
    [
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/81bcb28d-55f3-4d7b-bb5a-7cf7ee7fd8031690773011370-The_Collective.png",
        alt: "Ralph Lauren",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/7aac1f32-1a1a-4ba6-924b-ee1c28553aed1690773011304-Nautica.png",
        alt: "Diesel",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/437645a4-988c-4f53-aff3-b1fdb34938481690773011106-FCUK.png",
        alt: "Superdry",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/0c399e2c-9797-483d-bf6c-0852d5d21db21690773010989-BHPC.png",
        alt: "H&M",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/044555a5-9987-4a06-8679-8aeb2dd963f91690773011013-boohooMan.png",
        alt: "Zara",
      },
      {
        src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/2/805eeb23-ec17-4b50-b798-1244133c02041690955797245-image_png_1993656242.png",
        alt: "GAP",
      },
    ],
  ];

  // Generic function to change slide with fade effect
  const changeSlideWithFade = (section, newIndex) => {
    // Start fade out animation
    setIsFading((prev) => ({ ...prev, [section]: true }));

    // Clear any existing timeout
    if (carouselTimeoutRefs.current[section]) {
      clearTimeout(carouselTimeoutRefs.current[section]);
    }

    // After fade out, change slide and fade back in
    carouselTimeoutRefs.current[section] = setTimeout(() => {
      sliderData[section].setter(newIndex);
      setIsFading((prev) => ({ ...prev, [section]: false }));
    }, 300); // Transition time
  };

  // Auto-rotate all sliders with different intervals
  useEffect(() => {
    const intervals = {};

    // Set different intervals for each slider
    intervals.banner = setInterval(() => {
      sliderData.banner.setter((prev) => (prev + 1) % sliderData.banner.count);
    }, 3000);

    intervals.risingStars = setInterval(() => {
      const nextSlide =
        (currentRisingStarsSlide + 1) % sliderData.risingStars.count;
      changeSlideWithFade("risingStars", nextSlide);
    }, 3500);

    intervals.luxe = setInterval(() => {
      const nextSlide = (currentLuxeSlide + 1) % sliderData.luxe.count;
      changeSlideWithFade("luxe", nextSlide);
    }, 3500);

    intervals.medal = setInterval(() => {
      const nextSlide = (currentMedalSlide + 1) % sliderData.medal.count;
      changeSlideWithFade("medal", nextSlide);
    }, 3500);

    intervals.global = setInterval(() => {
      const nextSlide = (currentGlobalSlide + 1) % sliderData.global.count;
      changeSlideWithFade("global", nextSlide);
    }, 3500);

    // Clear all intervals on component unmount
    return () => {
      Object.values(intervals).forEach((interval) => clearInterval(interval));
      Object.values(carouselTimeoutRefs.current).forEach((timeout) => {
        if (timeout) clearTimeout(timeout);
      });
    };
  }, [
    currentRisingStarsSlide,
    currentLuxeSlide,
    currentMedalSlide,
    currentGlobalSlide,
  ]);

  // Function to create pagination dots
  const renderPagination = (type, count, current, setterFunction) => {
    return (
      <div className="pagination">
        {Array.from({ length: count }).map((_, index) => (
          <span
            key={`${type}-dot-${index}`}
            className={`dot ${current === index ? "active" : ""}`}
            onClick={() => {
              changeSlideWithFade(type, index);
            }}
          ></span>
        ))}
      </div>
    );
  };

  // Handle manual navigation
  const handleNavigation = (section, direction) => {
    const current = sliderData[section].current;
    const count = sliderData[section].count;
    const nextSlide =
      direction === "next"
        ? (current + 1) % count
        : (current - 1 + count) % count;

    changeSlideWithFade(section, nextSlide);
  };

  return (
    <div className="homepage">
      {/* Handbags Banner Section */}
      <div className="banner-section">
        <div className="banner-container">
          <div className="banner-left">
            <img
              src={bannerImages[currentBannerSlide]}
              alt={`Caprese handbag ${currentBannerSlide + 1}`}
              className="banner-image"
            />
          </div>
        </div>
        {renderPagination(
          "banner",
          sliderData.banner.count,
          currentBannerSlide,
          setCurrentBannerSlide
        )}
      </div>

      {/* Rising Stars Section */}
      <div className="section">
        <h2 className="section-title">RISING STARS</h2>
        <div style={{ position: "relative" }}>
          <div
            className={`brands-grid rising-stars-grid ${
              isFading.risingStars ? "fade-out" : "fade-in"
            }`}
          >
            {/* Show 5 products from the current slide */}
            {risingStarsProducts[currentRisingStarsSlide].map(
              (product, index) => (
                <div
                  className="brand-card"
                  key={`rising-star-${currentRisingStarsSlide}-${index}`}
                >
                  <img
                    src={product.src}
                    alt={product.alt}
                    className="brand-image"
                  />
                </div>
              )
            )}
          </div>
        </div>

        {renderPagination(
          "risingStars",
          sliderData.risingStars.count,
          currentRisingStarsSlide,
          setCurrentRisingStarsSlide
        )}
      </div>

      {/* Luxe Grand Reduction Deals Section */}
      <div className="section">
        <h2 className="section-title">LUXE GRAND REDUCTION DEALS</h2>
        <div style={{ position: "relative" }}>
          <div
            className={`brand-grid luxe-grid ${
              isFading.luxe ? "fade-out" : "fade-in"
            }`}
          >
            {/* Show 6 products from the current slide */}
            {luxeProducts[currentLuxeSlide].map((product, index) => (
              <div
                className="luxe-card"
                key={`luxe-${currentLuxeSlide}-${index}`}
              >
                <img
                  src={product.src}
                  alt={product.alt}
                  className="luxe-image"
                />
              </div>
            ))}
          </div>
        </div>

        {renderPagination(
          "luxe",
          sliderData.luxe.count,
          currentLuxeSlide,
          setCurrentLuxeSlide
        )}
      </div>

      {/* Medal Worthy Brands To Bag Section */}
      <div className="section">
        <h2 className="section-title">MEDAL WORTHY BRANDS TO BAG</h2>
        <div style={{ position: "relative" }}>
          <div
            className={`brand-grid medal-grid ${
              isFading.medal ? "fade-out" : "fade-in"
            }`}
          >
            {/* Show 6 products from the current slide */}
            {medalProducts[currentMedalSlide].map((product, index) => (
              <div
                className="medal-card"
                key={`medal-${currentMedalSlide}-${index}`}
              >
                <img
                  src={product.src}
                  alt={product.alt}
                  className="medal-image"
                />
              </div>
            ))}
          </div>
        </div>

        {renderPagination(
          "medal",
          sliderData.medal.count,
          currentMedalSlide,
          setCurrentMedalSlide
        )}
      </div>

      {/* Grand Global Brands Section */}
      <div className="section">
        <h2 className="section-title">GRAND GLOBAL BRANDS</h2>
        <div style={{ position: "relative" }}>
          <div
            className={`brand-grid global-grid ${
              isFading.global ? "fade-out" : "fade-in"
            }`}
          >
            {/* Show 6 products from the current slide */}
            {globalProducts[currentGlobalSlide].map((product, index) => (
              <div
                className="global-card"
                key={`global-${currentGlobalSlide}-${index}`}
              >
                <img
                  src={product.src}
                  alt={product.alt}
                  className="global-image"
                />
              </div>
            ))}
          </div>
        </div>

        {renderPagination(
          "global",
          sliderData.global.count,
          currentGlobalSlide,
          setCurrentGlobalSlide
        )}
      </div>

      {/* Shop By Category First Row */}
      <div className="section">
        <h2 className="section-title">SHOP BY CATEGORY</h2>
        <div className="category-grid">
          {/* Category content - remaining the same */}
          <div className="category-card">
            <img
              src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/0dedd7c2-6c01-4ab0-a907-8928e56066d41690787339184-Shop-By-Category_HP-4_02.jpg"
              alt="Ethnic Wear"
              className="category-image"
            />
          </div>
          <div className="category-card">
            <img
              src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/bfab4827-0ea6-4a5b-8b8d-167d497ae78e1690787339167-Shop-By-Category_HP-4_03.jpg"
              alt="WFH Casual Wear"
              className="category-image"
            />
          </div>
          <div className="category-card">
            <img
              src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/c61cfcfb-749f-4d8e-a318-0ea8f8705a1c1690787339442-Shop-By-Category_HP-4_04.jpg"
              alt="Activewear"
              className="category-image"
            />
          </div>
          <div className="category-card">
            <img
              src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/a50c2dec-c5bc-46f3-b754-294fb46c61971690787339077-Shop-By-Category_HP-4_05.jpg"
              alt="Activewear"
              className="category-image"
            />
          </div>
          <div className="category-card">
            <img
              src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/da4059bf-14f1-4928-b5b9-be8719887b8e1690787339149-Shop-By-Category_HP-4_06.jpg"
              alt="Western Wear"
              className="category-image"
            />
          </div>
          <div className="category-card">
            <img
              src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/3a804edc-ce57-4eb5-bb6a-493d458973661690787338896-Shop-By-Category_HP-4_07.jpg"
              alt="Sportswear"
              className="category-image"
            />
          </div>
        </div>

        {/* Shop By Category Second Row */}
        <div className="category-grid">
          <div className="category-card">
            <img
              src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/84870fc6-4805-41a4-b9eb-a8d7adb6c0d21690787339128-Shop-By-Category_HP-4_08.jpg"
              alt="Loungewear"
              className="category-image"
            />
          </div>
          <div className="category-card">
            <img
              src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/069d06bc-1b75-43f4-b8d1-1ec46193eb021690787339028-Shop-By-Category_HP-4_09.jpg"
              alt="Innerwear"
              className="category-image"
            />
          </div>
          <div className="category-card">
            <img
              src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/19755254-9c13-40a3-9cab-2bb9714391ab1690787339274-Shop-By-Category_HP-4_10.jpg"
              alt="Lingerie"
              className="category-image"
            />
          </div>
          <div className="category-card">
            <img
              src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/dd262b36-3a75-464a-97b5-235984080d851690787338916-Shop-By-Category_HP-4_11.jpg"
              alt="Watches"
              className="category-image"
            />
          </div>
          <div className="category-card">
            <img
              src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/d26e5ed5-d846-4692-88a5-54ab7d79203b1690787339203-Shop-By-Category_HP-4_12.jpg"
              alt="Grooming"
              className="category-image"
            />
          </div>
          <div className="category-card">
            <img
              src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/dd3d6118-cd57-4e73-a4a4-e7f8a6bfde7b1690787339093-Shop-By-Category_HP-4_13.jpg"
              alt="Beauty & Makeup"
              className="category-image"
            />
          </div>
        </div>

        {/* Shop By Category Third Row */}
        <div className="category-grid">
          <div className="category-card">
            <img
              src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/babe0d1a-b7fe-4b36-8a98-b275523963721690787339222-Shop-By-Category_HP-4_14.jpg"
              alt="Kids Wear"
              className="category-image"
            />
          </div>
          <div className="category-card">
            <img
              src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/3c2095db-905a-4346-9712-2fac7bcbbbd71690787339011-Shop-By-Category_HP-4_15.jpg"
              alt="Footwear"
              className="category-image"
            />
          </div>
          <div className="category-card">
            <img
              src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/c1c8027f-1a22-4a0b-8be2-848edab298cf1690787339044-Shop-By-Category_HP-4_16.jpg"
              alt="Footwear"
              className="category-image"
            />
          </div>
          <div className="category-card">
            <img
              src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/278917b5-1658-4c2c-b122-f623b1d909701690787339290-Shop-By-Category_HP-4_17.jpg"
              alt="Bags, Belts & Wallets"
              className="category-image"
            />
          </div>
          <div className="category-card">
            <img
              src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/6c53770e-b7b2-466a-b36e-a0b2bff1a7591690787339109-Shop-By-Category_HP-4_18.jpg"
              alt="Office Wear"
              className="category-image"
            />
          </div>
          <div className="category-card">
            <img
              src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/54852b61-90d6-484a-84c9-a8560247ffc21690787339307-Shop-By-Category_HP-4_19.jpg"
              alt="Ethnic Wear"
              className="category-image"
            />
          </div>
        </div>

        {/* Shop By Category Fourth Row */}
        <div className="category-grid">
          <div className="category-card">
            <img
              src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/5d78afb6-38bb-43bd-bc67-1e4f6026b6ae1690787339327-Shop-By-Category_HP-4_20.jpg"
              alt="Watches & Wearables"
              className="category-image"
            />
          </div>
          <div className="category-card">
            <img
              src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/90dcb992-9fb4-4208-8249-aa1a01b2851d1690787339476-Shop-By-Category_HP-4_21.jpg"
              alt="Sleepwear"
              className="category-image"
            />
          </div>
          <div className="category-card">
            <img
              src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/e4fcb9f0-f79a-41b7-b7b2-8828bb6e95e61690787339426-Shop-By-Category_HP-4_22.jpg"
              alt="Flip-Flops"
              className="category-image"
            />
          </div>
          <div className="category-card">
            <img
              src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/66882f76-0bbe-4741-8890-0426695e09131690787339238-Shop-By-Category_HP-4_23.jpg"
              alt="Eyewear"
              className="category-image"
            />
          </div>
          <div className="category-card">
            <img
              src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/6aa501b3-ce05-48f5-96fe-ecb64682dbc71690787339409-Shop-By-Category_HP-4_24.jpg"
              alt="Workwear"
              className="category-image"
            />
          </div>
          <div className="category-card">
            <img
              src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/b6e15609-4f52-44db-80c1-2a955fd4ac6e1690787339341-Shop-By-Category_HP-4_25.jpg"
              alt="Casual Styles"
              className="category-image"
            />
          </div>
        </div>

        {/* Shop By Category Fifth Row */}
        <div className="category-grid">
          <div className="category-card">
            <img
              src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/7916724b-be74-4920-b58d-ada0617cdee91690787339392-Shop-By-Category_HP-4_26.jpg"
              alt="Bags & Backpacks"
              className="category-image"
            />
          </div>
          <div className="category-card">
            <img
              src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/5c541739-5c23-4846-a875-f19a170cea151690787339460-Shop-By-Category_HP-4_27.jpg"
              alt="Trolleys & Luggage Bags"
              className="category-image"
            />
          </div>
          <div className="category-card">
            <img 
              src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/76932333-b792-4f54-983c-45aaf70e04ef1690787338936-Shop-By-Category_HP-4_28.jpg" 
              alt="Flip-Flops"
              className="category-image"
            />
          </div>
          <div className="category-card">
            <img
              src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/a351ad62-c1d1-4bb4-9967-d3966f8446521690787338974-Shop-By-Category_HP-4_29.jpg"
              alt="Flip-Flops"
              className="category-image"
            />
          </div>
          <div className="category-card">
            <img
              src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/130ceab4-ac68-42c5-a9f4-478ba7f903db1690787339061-Shop-By-Category_HP-4_30.jpg"
              alt="Flip-Flops"
              className="category-image"
            />
          </div>
          <div className="category-card">
            <img
              src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/cda4c195-22c1-4e11-a9dc-4728d69c3f2b1690787338956-Shop-By-Category_HP-4_31.jpg"
              alt="Flip-Flops"
              className="category-image"
            />
          </div>
        </div>

        {/* Shop By Category Sixth Row */}
        <div className="category-gd">
          <div className="category">
            <img
              src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/89e0a0ee-225d-4880-a761-6aa895d252871690787338993-Shop-By-Category_HP-4_33.jpg"
              alt="Bags & Backpacks"
              className="category-image"
            />
          </div>
          <div className="category">
            <img
              src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/82cdf918-9ad9-41fa-a5a7-c4c86fbad90c1690787338876-Shop-By-Category_HP-4_34.jpghttps://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/82cdf918-9ad9-41fa-a5a7-c4c86fbad90c1690787338876-Shop-By-Category_HP-4_34.jpg"
              alt="Trolleys & Luggage Bags"
              className="category-image"
            />
          </div>
          <div className="category">
            <img
              src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/ed2e98bc-e4f4-4e85-bc74-537142205d0f1690787339374-Shop-By-Category_HP-4_35.jpg"
              alt="Flip-Flops"
              className="category-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
