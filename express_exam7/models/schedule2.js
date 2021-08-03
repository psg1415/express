const schedule2 = {
  getyoils() {
    const yoils = ["일","월","화","수","목","금","토"];
    return yoils;
  },
  getCalendar(year, month) {
    let date = new Date();
    year = year || date.getFullYear();
    month = month || date.getMonth() + 1;

    date = new Date(year, month - 1, 1);
  }
};

module.exports = schedule2;
