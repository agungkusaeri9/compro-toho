import moment from "moment";
import "moment/locale/id"; // kalau mau pakai bahasa Indonesia

moment.locale("id"); // atur locale

export const formatDate = (
  dateStr: string,
  format: string = "DD MMMM YYYY",
) => {
  return moment(dateStr).format(format);
};
