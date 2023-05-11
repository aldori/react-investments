export function getMonth(month) {
  switch (month) {
    case 1:
      return "jan";
    case 2:
      return "fev";
    case 3:
      return "mar";
    case 4:
      return "abr";
    case 5:
      return "maio";
    case 6:
      return "jun";
    case 7:
      return "jul";
    case 8:
      return "ago";
    case 9:
      return "set";
    case 10:
      return "out";
    case 11:
      return "nov";

    default:
      return "dez";
  }
}
