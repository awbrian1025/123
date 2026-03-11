type Hero = {
  title: string;
  description: string;
  typeAnimationTexts: (string | number)[];
  achievementsList: Achievement[];
};

type Achievement = {
  metric: string;
  value: string;
  postfix?: string;
  prefix?: string;
};

export const hero: Hero = {
  title: "114514",
  description: "18歲 是個大學生",
  typeAnimationTexts: [
    "擔任機器人",
    3000,
    "成為程式貓",
    3000,
    "擔任FRC",
    3000,
  ],
  achievementsList: [
    { metric: "APCS", value: "5+5", postfix: "級" },
    { metric: "競賽獲獎", value: "2000", postfix: "+" },
    { metric: "服務使用者", value: "1000", postfix: "+" },
    { metric: "專案數量", value: "3000", postfix: "+" },
    { metric: "社群追蹤數", value: "15000", postfix: "+" },
  ],
};
