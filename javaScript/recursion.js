// 递归处理函数，针对具有children的数组
// 不改变原数组
// 与父系一起需要添加选中或未选中的状态
const list = [
  {
    groupName: "Explorers",
    members: [
      { name: "Li Ming", age: 29 },
      { name: "Wang Fang", age: 34 },
      { name: "Zhao Lei", age: 23 },
      { name: "Chen Jing", age: 45 },
    ],
  },
  {
    groupName: "Innovators",
    members: [
      { name: "Zhang Wei", age: 27 },
      { name: "Liu Yang", age: 32 },
      { name: "Sun Li", age: 41 },
    ],
  },
  {
    groupName: "Practitioners",
    members: [
      { name: "Zhou Qiang", age: 48 },
      { name: "Wu Mei", age: 38 },
      { name: "Zheng Hai", age: 52 },
      { name: "Huang Xia", age: 22 },
      { name: "Song Tao", age: 36 },
    ],
  },
];

const activeName = "Li Ming";

const selectList = (e = [], parentInSelect = false) => {
  return e.map((t) => {
    let isSelect = parentInSelect;
    // 进行递归检测
    const updatedMembers = (t.members || []).map((member) => {
      const memberIsSelect =
        member.name === activeName ||
        (member.members && member.members.some((subMe) => subMe.isSelect));
      isSelect = isSelect || memberIsSelect;
      return {
        ...member,
        isSelect: memberIsSelect || false,
        members: member.members
          ? selectList(member.members, memberIsSelect)
          : [],
      };
    });

    return {
      ...t,
      //   确保isSelect初始化成功
      isSelect: isSelect || false,
      members: updatedMembers,
    };
  });
};
const newList = selectList(list);
console.log(newList);
