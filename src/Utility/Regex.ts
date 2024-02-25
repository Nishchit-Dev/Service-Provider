interface RegexType {
  Name: RegExp;
  Email: RegExp;
  Password: RegExp;
  Phone: RegExp;
  CountryCode: RegExp;
}
export const Regex: RegexType = {
  Name: /^(?! ).*[^ ]$/,
  Email: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
  Password: /^((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,})$/,
  Phone: /^\d{10}$/,
  CountryCode: /^\\+\\d{1,2}$/,
};
