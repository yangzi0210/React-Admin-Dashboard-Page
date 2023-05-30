import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
} from "@iconscout/react-unicons";
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

export const SidebarData = [
  {
    icon: UilEstate,
    heading: "总览",
  },
  {
    icon: UilClipboardAlt,
    heading: "指令",
  },
  {
    icon: UilUsersAlt,
    heading: "客户",
  },
  {
    icon: UilPackage,
    heading: "产品",
  },
  {
    icon: UilChart,
    heading: "分析",
  },
];

export const cardsData = [
  {
    title: "销售额",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,000",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [3000, 4000, 3500, 2500, 2000, 5000, 5000],
      },
    ],
  },
  {
    title: "利润",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "20,000",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [2400, 3300, 2700, 2000, 1600, 3800, 4200],
      },
    ],
  },
  {
    title: "支出",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "5,000",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [600, 700, 800, 500, 400, 1200, 800],
      },
    ],
  },
];

export const UpdatesData = [
  {
    img: img1,
    name: "阿狸",
    noti: "下单了卢登的激荡、莫雷洛秘典.",
    time: "25 秒前",
  },
  {
    img: img2,
    name: "金克丝",
    noti: "确认收货了卢安娜的飓风、多米尼克领主的致意.",
    time: "30 分钟前",
  },
  {
    img: img3,
    name: "萨勒芬妮",
    noti: "拍下了月石再生器、米凯尔的祝福",
    time: "2 小时前",
  },
];
